import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import Home from "../../pages/user/home/Home";


export const AuthRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]