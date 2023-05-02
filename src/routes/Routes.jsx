import React from 'react';
import {createBrowserRouter} from "react-router-dom";
  import Main from '../layouts/Main.jsx';
  import Home from '../components/Home/Home.jsx';
  import ErrorPage from '../components/ErrorPage/ErrorPage.jsx';
import Blog from '../components/Blogs/Blog.jsx';
import Recipies from '../components/Recipies/Recipies.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/recipies",
          element: <Recipies></Recipies>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;