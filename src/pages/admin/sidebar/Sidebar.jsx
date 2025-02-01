import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUsers, FiSettings, FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const SidebarItem = ({ icon, text, to, isOpen }) => {
        return (
            <li className="flex items-center p-3 hover:bg-gray-800 transition-all">
                <Link to={to} className="flex items-center gap-3 text-lg">
                    {icon}
                    <span className={`${!isOpen && 'hidden'}`}>{text}</span>
                </Link>
            </li>
        );
    };


    return (
        <div className={`h-screen bg-gray-900 text-white transition-all mt-28 duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h2 className={`text-xl font-bold ${!isOpen && 'hidden'}`}>Admin Panel</h2>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-4">
                <ul>
                    <SidebarItem icon={<FiHome />} text="Dashboard" to="/dashboard" isOpen={isOpen} />
                    <SidebarItem icon={<FiUsers />} text="Users" to="/users" isOpen={isOpen} />
                    <SidebarItem icon={<FiSettings />} text="Crime Updates" to="/login" isOpen={isOpen} />
                    <SidebarItem icon={<FiSettings />} text="Law Justice" to="/lawJustice" isOpen={isOpen} />
                    <SidebarItem icon={<FiSettings />} text="Settings" to="/settings" isOpen={isOpen} />
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
