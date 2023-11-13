import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import AdvPage from "../pages/AdvPage";
import SellerProfilePage from "../pages/SellerProfilePage";
import MyAdvPage from "../pages/MyAdvPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";

const AppRoutes = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="adv" element={<AdvPage />} />
          <Route path="seller" element={<SellerProfilePage />} />
          <Route path="myadv" element={<MyAdvPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
