import React from "react";
import { createBrowserRouter } from "react-router-dom";

//LAYOUT IMPORTS
import UserLayout from "./layouts/UserLayout";

//PAGES IMPORTS
import Home from "./pages/Home";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
