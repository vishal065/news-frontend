import Header from "../../pages/admin/header/Header";
import Sidebar from "../../pages/admin/sidebar/Sidebar";
import Home from "../../pages/user/home/Home";


export const AdminRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin",
        element: <Header />
    },
    {
        path: "/sidebar",
        element: <Sidebar />
    },
]