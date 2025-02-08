import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FiHome, FiUsers, FiMenu, FiX } from 'react-icons/fi';
import Navbar from '../header/Navbar';
import Login from '../../auth/Login';
import { GoLaw } from 'react-icons/go';
import { LiaAwardSolid } from 'react-icons/lia';
import Register from './Register';

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true);

    const SidebarItem = ({ icon, text, to }) => (
        <li className="flex items-center p-3 hover:bg-gray-800 transition-all">
            <Link to={to} className="flex items-center gap-3 text-lg">
                {icon}
                <span className={`${!isOpen && 'hidden'}`}>{text}</span>
            </Link>
        </li>
    );

    return (
        <div className="flex flex-col min-h-screen">
            <div className="mt-20 flex flex-grow">
                {/* Sidebar */}
                <div className={`h-screen bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-54' : 'w-20'}`}>
                    <div className="flex items-center justify-start p-4 border-b border-gray-700">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    <nav className="mt-4">
                        <ul>
                            <SidebarItem icon={<FiHome />} text="Dashboard" to="/admin" />
                            <SidebarItem icon={<FiUsers />} text="Login" to="/login" />
                            <SidebarItem icon={<GoLaw />} text="Crime Updates" to="/crime-update" />
                            <SidebarItem icon={<LiaAwardSolid />} text="Law Justice" to="/lawJustice" />
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <Navbar />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/admin" element={<Register />} />
                        <Route path="/crime-update" element={<div>Crime Updates Page</div>} />
                        <Route path="/lawJustice" element={<div>Law Justice Page</div>} />
                    </Routes>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-3 pb-3 text-center text-sm">
                <p>&copy; 2025 NewsToday. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Dashboard;
