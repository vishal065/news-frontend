import { Route, Routes } from "react-router-dom";
import NotFound from "../components/NotFound";
import Dashboard from "../pages/admin/sidebar/Dashboard";
import { AdminRoutes } from "./adminRoutes/AdminRoutes";
import { UserPublicRoutes } from "./userRoutes/PublicRoutes";
import UserLayout from "./userRoutes/UserLayoute";


const RootRouting = () => {
    const adminRole = false;


    return (
        <Routes>
            {!adminRole && <Route element={<Dashboard />}>
                {AdminRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>
            }

            {!adminRole && <Route element={<UserLayout />} >
                {UserPublicRoutes?.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>
            }


            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
export default RootRouting;