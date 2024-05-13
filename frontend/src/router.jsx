import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";

//LAYOUT IMPORTS
import UserLayout from "./layouts/UserLayout";

//PAGES IMPORTS
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SharedFiles from './pages/SharedFiles';
import MyDrive from './pages/MyDrive';
import Trash from './pages/Trash';
import GuestLayout from "./layouts/GuestLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" />
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
  
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/mydrive",
        element: <MyDrive />,
      },
      {
        path: "/sharedwithme",
        element: <SharedFiles />,
      },
      {
        path: "/trash",
        element: <Trash />,
      },
    ],
  },

  {
    path: "*",
    element: <Login /> //replace with 404 not found page
  },
  
]);

export default router;
