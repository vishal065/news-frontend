import AddNews from "../../pages/admin/sidebar/AddNews";
import Anchor from "../../pages/admin/sidebar/Anchor";
import Category from "../../pages/admin/sidebar/Category";
import Dashboard from "../../pages/admin/sidebar/Dashboard";
import NewsTable from "../../pages/admin/sidebar/NewsTable";
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
        path: "/newsTable",
        element: <NewsTable />
    },
    {
        path: "/addNews",
        element: <AddNews />
    },


]