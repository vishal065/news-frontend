import React, { useState, useEffect, useRef } from "react";
import { UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogout } from "../../../hooks/useAuth";
import persistStore from "redux-persist/es/persistStore";
import { authLogout } from "../../../redux/features/authSlice";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const { mutate, isPending } = useLogout()
    const profileRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutAdmin = () => {
        mutate(null, {
            onSuccess: (data) => {
                if (data.status === 200) {
                    dispatch(authLogout())
                    persistStore.purge();
                    navigate("/");
                }
            }
        })
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowLogout(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
            {/* Logo */}
            <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                    <img
                        src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
                        alt="Logo"
                        className="h-14 w-auto"
                    />
                </Link>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
                <div className="relative" ref={profileRef}>
                    <div
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                        onClick={() => setShowLogout(!showLogout)}
                    >
                        <UserCircle className="w-8 h-8 text-gray-600" />
                        <span className="text-gray-700 font-medium">Admin</span>
                    </div>
                    {showLogout && (
                        <div className="absolute border border-red-100 right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                            <button onClick={logoutAdmin} className="block w-full text-center px-4 py-2 text-gray-700 hover:bg-red-50">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
