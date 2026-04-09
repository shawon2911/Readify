import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Books from "../Pages/Books/Books";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
      {
        index: true,
        element: <HomePage />,
      },
      {
        path:"/books",
        element: <Books />,
      },
    ],
  },
]);
