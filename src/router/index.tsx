import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Forbidden403 from "../pages/Forbidden403";
import NotFound404 from "../pages/NofFound404";
import { Navigate } from "react-router-dom";

const router = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/403",
    element: <Forbidden403 />
  },
  {
    path: "/404",
    element: <NotFound404 />
  },
  {
    path: "*",
    element: <Navigate to="/404" />
  }
];

export default createBrowserRouter(router);
