import React from 'react';
import {createBrowserRouter} from "react-router-dom";
  import Main from '../layouts/Main.jsx';
  import Home from '../components/Home/Home.jsx';
  import ErrorPage from '../components/ErrorPage/ErrorPage.jsx';
import Blog from '../components/Blogs/Blog.jsx';
import Recipies from '../components/Recipies/Recipies.jsx';
import SelectedRecipies from '../components/Recipies/SelectedRecipies.jsx';
import Register from '../components/Register/Register.jsx';
import Login from '../components/Login/Login.jsx';

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
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/recipies/:id",
          element: <SelectedRecipies></SelectedRecipies>,
          loader: ({params})=> fetch(`https://chef-receipe-hunter-server-abadathossain.vercel.app/recipes/${params.id}`)
        },
      ]
    },
  ]);

export default router;