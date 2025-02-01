import React, { useState, useEffect, useRef } from "react";
import { Bell, UserCircle } from "lucide-react";

const Header = () => {
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
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center mt-40 mb-40">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-700">Admin Panel</div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                {/* Notification Icon */}
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                    <Bell className="w-6 h-6 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">3</span>
                </button>

                {/* User Profile */}
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

export default Header;
