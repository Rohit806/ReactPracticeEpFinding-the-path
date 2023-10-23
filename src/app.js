import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/body"
import About from "./components/About.js"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Restaurant from "./components/restaurantMenu"




const AppLayout =()=> {
  return(
    <> 
     <Header/>
     <Outlet/>
     <Footer/>
     </>
  );
};

const appRouter =createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement :<Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },     
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },    
      {
        path: "/restaurant/:resId",
        element: <Restaurant/>
      },
    ]
  },

]);

const root =ReactDOM.createRoot(document.getElementById("root")); //Creating root where all insertion will take place .here it is id root
root.render(<RouterProvider router={appRouter}/>)// to verify result check inspect in browser(elements and console)


