import { Outlet, Navigate } from "react-router-dom";
import { isAuth } from "../utils/constants";

const ProtectedRoute = () => {
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
