import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../sidebar/Dashboard";

const Layout = () => {
    return (
        <div className="flex h-screen">
            {/* Fixed Sidebar */}
            <Dashboard />

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
                <Outlet /> {/* This will render the selected page */}
            </div>
        </div>
    );
};

export default Layout;
