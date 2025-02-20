import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Navbar from '../header/Navbar';
import { GoLaw } from 'react-icons/go';
import Category from './Category';
import SubCategory from './SubCategory';
import Anchor from './Anchor';
import Publisher from './Publisher';
import News from './News';
import AddNews from './AddNews';


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
                            <SidebarItem icon={<GoLaw />} text="Category" to="/category" />
                            <SidebarItem icon={<GoLaw />} text="SubCategory" to="/subCategory" />
                            <SidebarItem icon={<GoLaw />} text="Anchor" to="/anchor" />
                            <SidebarItem icon={<GoLaw />} text="Publisher" to="/publisher" />
                            <SidebarItem icon={<GoLaw />} text="News Table" to="/news" />
                            <SidebarItem icon={<GoLaw />} text="Add News" to="/addNews" />
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-grow">
                    <Navbar />
                    <Routes>
                        <Route path="/category" element={<Category />} />
                        <Route path="/subCategory" element={<SubCategory />} />
                        <Route path="/anchor" element={<Anchor />} />
                        <Route path="/publisher" element={<Publisher />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/addNews" element={<AddNews />} />
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
