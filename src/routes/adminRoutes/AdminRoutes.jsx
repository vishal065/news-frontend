import Dashboard from "../../pages/admin/sidebar/Dashboard";
import Table from "../../pages/admin/sidebar/Table";



export const AdminRoutes = [
    {
        path: "/admin",
        element: <Dashboard />
    },
    {
        path: "/table",
        element: <Table />
    },

]