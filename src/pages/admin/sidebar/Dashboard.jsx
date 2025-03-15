import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Category from './Category';
import SubCategory from './SubCategory';
import Anchor from './Anchor';
import Publisher from './Publisher';
import AddNews from './AddNews';
import Navbar from './Navbar';
import NewsTable from './NewsTable';
import UpdateNews from './updateNews';
import DashboardComponent from '../../../components/DashboardComponent';
import {
    LayoutDashboard,
    Newspaper,
    Users, FolderOpen,
    Layers,
    PenTool,
    PlusSquare
} from 'lucide-react';


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
            <div className="mt-20 flex flex-grow -mb-4">
                {/* Sidebar */}
                <div className={`h-vh bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-54' : 'w-20'}`}>
                    <div className="flex items-center justify-start p-4 border-b border-gray-700">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl cursor-pointer">
                            {isOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                    <nav className="mt-6 ">
                        <div className="flex items-center gap-2 mb-8">
                            <Newspaper className="w-8 h-8 text-blue-400" />
                            <h1 className="text-xl font-bold">NewsHub</h1>
                        </div>
                        <ul>
                            <SidebarItem icon={<LayoutDashboard />} text="Dashboard" to="/" />
                            <SidebarItem icon={<Layers />} text="Category" to="/category" />
                            <SidebarItem icon={<FolderOpen />} text="SubCategory" to="/subCategory" />
                            <SidebarItem icon={<Users />} text="Anchor" to="/anchor" />
                            <SidebarItem icon={<PenTool />} text="Publisher" to="/publisher" />
                            <SidebarItem icon={<Newspaper />} text="News Table" to="/newsTable" />
                            <SidebarItem icon={<PlusSquare />} text="Add News" to="/news/add" />
                        </ul>
                    </nav>
                </div>

                {/* Main Content */}
                <div className="flex-grow  ">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<DashboardComponent />} />
                        <Route path="/category" element={<Category />} />
                        <Route path="/subCategory" element={<SubCategory />} />
                        <Route path="/anchor" element={<Anchor />} />
                        <Route path="/publisher" element={<Publisher />} />
                        <Route path="/newsTable" element={<NewsTable />} />
                        <Route path="/news/add" element={<AddNews />} />
                        <Route path="/news/update/:id" element={<UpdateNews />} />
                    </Routes>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-2 pb-2 bg-gray-900 text-white text-center text-sm">
                <p>&copy; 2025 NewsToday. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Dashboard;
