import { Children, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({Children}) => {
    const {auth}= useContext(AuthContext);

    return auth.isAuthenticated ? Children : <Navigate to='/login'/>;

};
export default PrivateRoute;