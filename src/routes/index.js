import React from "react";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../layouts";
import Test from "../pages/Test";



const routes = [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Navigate to="/dashboard" />
  },
  {
    path: "dashboard",
    layout: DefaultLayout,
    component: Test
  },
];

export default routes;