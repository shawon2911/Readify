import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/Homepage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Components/Shared/Navbar/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

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
      {
        path:"/bookDetails/:id",
        element: <BookDetails />,
        loader : ()=> fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage/>
  },
]);
