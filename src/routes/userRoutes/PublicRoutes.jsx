import About from "../../pages/user/about/About";
import Contact from "../../pages/user/contact/Contact";
import Home from "../../pages/user/home/Home";
import HomeDetails from "../../pages/user/home/HomeDetails";


export const UserPublicRoutes = [


    {
        path: "/",
        element: <Home />
    },
    {
        path: "/news/:slug",
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

]