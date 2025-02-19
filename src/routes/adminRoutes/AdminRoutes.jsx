import AddNews from "../../pages/admin/sidebar/AddNews";
import Anchor from "../../pages/admin/sidebar/Anchor";
import Category from "../../pages/admin/sidebar/Category";
import Dashboard from "../../pages/admin/sidebar/Dashboard";
import News from "../../pages/admin/sidebar/News";
import Publisher from "../../pages/admin/sidebar/Publisher";
import SubCategory from "../../pages/admin/sidebar/SubCategory";


export const AdminRoutes = [
    {
        path: "/",
        element: <Dashboard />
    },
    {
        path: "/category",
        element: <Category />
    },
    {
        path: "/subCategory",
        element: <SubCategory />
    },
    {
        path: "/anchor",
        element: <Anchor />
    },
    {
        path: "/publisher",
        element: <Publisher />
    },
    {
        path: "/news",
        element: <News />
    },
    {
        path: "/addNews",
        element: <AddNews />
    }

]