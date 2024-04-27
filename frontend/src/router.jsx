import React from "react";
import { createBrowserRouter } from "react-router-dom";

//LAYOUT IMPORTS
import UserLayout from "./layouts/UserLayout";

//PAGES IMPORTS
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SharedFiles from './pages/SharedFiles';
import MyDrive from './pages/MyDrive';
import Trash from './pages/Trash';
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
