"use client";
import Register from "./pages/auth-register/auth-register"; 
import DesignCourses from "./pages/design-courses/design-courses";
import EditProfile from "./pages/edit-profile/edit-profile"; 
import  HomePage  from "./pages/home-page/home-page"; 
import LoginForm from "./pages/login-form/login-form"; 
import Profile from "./pages/Profile/Profile"; 

const Index = () => {
  return <HomePage />;
};

const LoginFormPage = () => <LoginForm />;
const DesignCoursesPage = () => <DesignCourses />;
const RegisterPage = () => <Register />;
const EditProfilePage = () => <EditProfile />;
const ProfilePage = () => <Profile />;

const ErrorPage = () => <div>Error: Page Not Found</div>;

export {
  Index,
  LoginFormPage,
  DesignCoursesPage,
  RegisterPage,
  EditProfilePage,
  ProfilePage,
  ErrorPage
};