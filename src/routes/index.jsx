import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "./authRoutes/AuthRoutes";

import UserLayout from "./userRoutes/UserLayoute";


const RootRouting = () => {

    return (
        <Routes>
            <Route element={<UserLayout />}>
                {AuthRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>

        </Routes>
    )
}
export default RootRouting;