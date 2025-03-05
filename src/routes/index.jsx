import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Dashboard from "../pages/admin/sidebar/Dashboard";
import { AdminRoutes } from "./adminRoutes/AdminRoutes";
import { UserPublicRoutes } from "./userRoutes/PublicRoutes";
import UserLayout from "./userRoutes/UserLayoute";
import { useSelector } from "react-redux";
import { AuthRoutes } from "./authRoutes/AuthRoutes";


const RootRouting = () => {
    const authState = useSelector((state) => state.auth);


    return (
        <Routes>
            {authState?.role === "admin" && authState?.accessToken && (
                <Route path="/*" element={<Dashboard />}>
                    {AdminRoutes.map((item, index) => (
                        <Route key={index} path={item.path} element={item.element} />
                    ))}
                </Route>
            )}


            {authState?.accessToken && <Route element={<UserLayout />} >
                {UserPublicRoutes?.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>
            }

            {!authState?.accessToken ? <Route element={<UserLayout />} >
                {AuthRoutes?.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route> : AuthRoutes.map((item, index) => <Route key={index} path={item.path} element={<Navigate to="/" />} />)
            }

            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}
export default RootRouting;