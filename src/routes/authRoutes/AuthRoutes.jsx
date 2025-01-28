import Login from "../../pages/auth/Login";
import Home from "../../pages/user/home/Home";


export const AuthRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    }
]