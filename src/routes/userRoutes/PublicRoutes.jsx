import About from "../../pages/user/about/About";
import Contact from "../../pages/user/contact/Contact";
import HomeDetails from "../../pages/user/home/HomeDetails";


export const UserPublicRoutes = () => [


    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/about",
        element: <About />
    },

]