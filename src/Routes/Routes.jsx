import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddToys from "../page/AddToys/AddToys";
import AllToys from "../page/AllToys/AllToys";
import MyToys from "../page/MyToys/MyToys";
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
      {
        path: "all-toys",
        element: <AllToys></AllToys>,
        loader: () => fetch("http://localhost:5000/all-toys"),
      },
      {
        path: "my-toys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);
export default router;
