import React from "react";
import { Navigate } from "react-router-dom";
import { Container } from "../layouts";
import Test from "../pages/Test";



const routes = [
  {
    path: "/",
    exact: true,
    layout: Container,
    component: () => <Navigate to="/dashboard" />
  },
  {
    path: "/dashboard",
    layout: Container,
    component: Test
  },
];

export default routes;