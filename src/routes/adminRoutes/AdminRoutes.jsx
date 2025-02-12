import Dashboard from "../../pages/admin/sidebar/Dashboard";
import Table from "../../pages/admin/sidebar/Table";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";


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
    },
    {
        path: "/register",
        element: <Register />
    }

]