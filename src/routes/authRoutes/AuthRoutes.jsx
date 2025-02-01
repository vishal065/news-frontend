import Header from "../../pages/admin/header/Header";
import Sidebar from "../../pages/admin/sidebar/Sidebar";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import About from "../../pages/user/about/About";
import Contact from "../../pages/user/contact/Contact";
import Home from "../../pages/user/home/Home";
import HomeDetails from "../../pages/user/home/HomeDetails";


export const AuthRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/details",
        element: <HomeDetails />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
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