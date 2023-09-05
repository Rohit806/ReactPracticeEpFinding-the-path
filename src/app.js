import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/header"
import Footer from "./components/footer"
import Body from "./components/body.js"

const AppLayout =()=> {
  return(
    <> 
      
      <Header/>
      <Body/>
      <Footer/>
     </>
  );
};

const root =ReactDOM.createRoot(document.getElementById("root")); //Creating root where all insertion will take place .here it is id root
root.render(<AppLayout/>);// to verify result check inspect in browser(elements and console)


