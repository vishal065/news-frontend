import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./authRoutes/AuthRoutes";
import UserLayout from "./userRoutes/UserLayoute";
import NotFound from "../components/NotFound";
import { UserPublicRoutes } from "./userRoutes/PublicRoutes";


const RootRouting = () => {

    return (
        <Routes>
            <Route element={<UserLayout />}>
                {AuthRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>

            {/* <Route element={<UserLayout />}>
                {UserPublicRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route> */}



            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default RootRouting;