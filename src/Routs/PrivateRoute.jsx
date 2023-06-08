import { Children, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = () => {

    const { user , loading} = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return Children
    }

    return <Navigate to="\login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;