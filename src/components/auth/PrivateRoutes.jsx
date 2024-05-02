import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector((store) => store.user);
    // console.log(user)
    if(user.token === ""){
        return <Navigate to={"/login"}/>
    }
    else{
        return <Outlet />
    }
}
export default PrivateRoutes