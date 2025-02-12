import Dashboard from "../../pages/admin/sidebar/Dashboard";
import Table from "../../pages/admin/sidebar/Table";
import Login from "../../pages/auth/Login";


export const AdminRoutes = [
    {
        path: "/admin",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/table",
        element: <Table />
    }

]