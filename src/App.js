import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration} from "react-router-dom";
import Cart from "./pages/Cart";
import { ProductData } from "./api/Api";
import Product from "./components/Product";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

const Layout = () =>{
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
};

const router = createBrowserRouter([
  {path: "/",
  element:<Layout/>,
  children:[
    {
      path: '/',
      element:<Home />,
      loader: ProductData,
    },
    {
      path: '/product/:id',
      element: <Product/>
    },
    {
      path: '/cart',
      element:<Cart />
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path: '/about',
      element:<About/>
    },
    {
      path: '/contact',
      element:<Contact/>
    },
    {
      path: '/blog',
      element:<Blog/>
    }
  ]
  }
])

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;