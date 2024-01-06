import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = [
  {
    path: "/",
    element: <App />
  }
];

export default createBrowserRouter(router);
