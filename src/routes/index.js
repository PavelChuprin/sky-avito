import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Layout from "../components/Layout";
import MainPage from "../pages/MainPage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import AdsPage from "../pages/AdsPage";
import SellerProfilePage from "../pages/SellerProfilePage";
import MyAdsPage from "../pages/MyAdsPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="ads/:id" element={<AdsPage />} />
        <Route path="seller/:id" element={<SellerProfilePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="myads" element={<MyAdsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
