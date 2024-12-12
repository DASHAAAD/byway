import Register from "@/page/auth-register/auth-register";
import DesignСourses from "@/page/design-courses/design-courses";
import { HomePage } from "@/page/home-page/home-page";
import { Error } from "@/page/error/Error";
import LoginForm from "@/page/login-form/login-form";
import { Route, Routes } from "react-router-dom";
import { Profile } from "@/page/profile/profile";
import EditProfile from "@/page/edit-profile/edit-profile";

export const RoutesUi = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/DesignСourses" element={<DesignСourses />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/EditProfile" element={<EditProfile />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Error" element={<Error />} />
    </Routes>
  );
};
