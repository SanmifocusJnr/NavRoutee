/** @format */

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GeneralLayout from "./Component/GeneralLayout";
import Setting from "./Route/Setting";
import About from "./Route/About";
import Contact from "./Route/Contact";
import Login from "./Route/Login";
import Home from "./Component/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <GeneralLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/setting", element: <Setting /> },
        { path: "/contact", element: <Contact /> },
        { path: "/about", element: <About /> },
      ],
    },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
