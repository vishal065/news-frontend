import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import VerifyOtp from "../../pages/auth/VerifyOtp";
import About from "../../pages/user/about/About";
import Contact from "../../pages/user/contact/Contact";
import Home from "../../pages/user/home/Home";


export const UserPublicRoutes = [


    {
        path: "/",
        element: <Home />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
    },

]