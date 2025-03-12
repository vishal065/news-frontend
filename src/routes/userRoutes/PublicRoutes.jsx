import Contact from "../../pages/user/home/Contact";
import About from "../../pages/user/home/About";
import Home from "../../pages/user/home/Home";
import HomeDetails from "../../pages/user/home/HomeDetails";


export const UserPublicRoutes = [



    {
        path: "/news/:slug",
        element: <HomeDetails />
    },
    {
        path: "/contact-us",
        element: <Contact />
    },
    {
        path: "/about-us",
        element: <About />
    },
    {
        path: "/:id/:id2?",
        element: <Home />
    },

]