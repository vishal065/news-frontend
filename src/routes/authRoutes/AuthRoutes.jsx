import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import VerifyOtp from "../../pages/auth/VerifyOtp";
import Home from "../../pages/user/home/Home";


export const AuthRoutes = [

    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin/register",
        element: <Register />
    },
    {
        path: "/verify-account",
        element: <VerifyOtp />
    }, {
        path: "/register",
        element: <Register />
    },
    {
    path: "/",
        element: <Home />
    },

] 