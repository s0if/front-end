import React from 'react'
import Root from './assets/Root/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './assets/page/Home/Home';
import Categories from './assets/page/Categories/Categories';
import Cart from './assets/page/Cart/Cart';
import Signin from './assets/page/Signin/Signin';
import Signup from './assets/page/Signup/Signup';
import Products from './assets/page/Products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path:"/categories",
          element:<Categories/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/signin",
          element:<Signin/>
        },
        {
          path:"/signup",
          element:<Signup/>
        },
        {
          path:"/products",
          element:<Products/>
        }
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
