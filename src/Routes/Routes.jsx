import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home/Home/Home";
import Login from "../page/Login/Login";
import Register from "../page/Register/Register";
import AddToys from "../page/AddToys/AddToys";
import AllToys from "../page/AllToys/AllToys";
import MyToys from "../page/MyToys/MyToys";
import ViewDetails from "../page/ViewDetails/ViewDetails";
import Update from "../page/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NotFound from "../page/NotFound/NotFound";
import Blog from "../page/Blog/Blog";
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
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "view-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toys-market-server-beta.vercel.app/view-detailsToy/${params.id}`
          ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://toys-market-server-beta.vercel.app/view-detailsToy/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);
export default router;
