import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body.js"
import About from "./components/about.js"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import Error from "./components/error.js";
import Contact from "./components/contact.js";
import Restaurant from "./components/restaurant"




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


