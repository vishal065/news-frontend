import React, { useState, useEffect, useRef } from "react";
import { UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const profileRef = useRef(null);

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
                <Link to="/admin" className="-m-1.5 p-1.5">
                    <img
                        alt="Logo"
                        src="https://w7.pngwing.com/pngs/937/360/png-transparent-ncr-hd-logo-thumbnail.png"
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
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2">
                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
