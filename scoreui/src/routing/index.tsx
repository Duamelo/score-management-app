import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../views/home/home";
import { LoginForm } from "../components/auth/login"
import { RegisterForm } from "../components/register/register";
import ErrorPage from "../views/error/error";
import { AuthGuard } from "../components/auth/guard";
// import Dashboard from "../components/dashboard/dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthGuard><Home/></AuthGuard>,
      errorElement: <ErrorPage/>
    },
    {
        path: "/dashboard",
        element: <Home/>,
    },
    {
      path: "/login",
      element: <LoginForm />,
    },
    {
      path: "/register/player",
      element: <RegisterForm profile="player" />,
    },{
      path: "/register/admin",
      element: <RegisterForm profile="admin" />,
    },{
      path: "/register",
      element: <RegisterForm profile="user" />,
    },
  ]);
  