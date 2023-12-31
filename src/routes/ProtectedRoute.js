import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
