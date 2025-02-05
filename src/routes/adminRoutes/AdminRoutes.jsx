import Dashboard from "../../pages/admin/sidebar/Dashboard";
import Login from "../../pages/auth/Login";


export const AdminRoutes = [
    {
        path: "/admin",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
    }

]