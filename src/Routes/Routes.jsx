import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddToys from "../page/AddToys/AddToys";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "add-toys",
        element: <AddToys></AddToys>,
      },
    ],
  },
]);
export default router;
