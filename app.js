import React from "react"
import ReactDOM from "react-dom/client"


console.log("Hello World");

//Insertion of Hello World using DOM Manipulation
let a=document.createElement("h2");
a.innerHTML="Hello World";
let b=document.getElementById("abc");
b.appendChild(a);

//Insertion of Hello World using React
const heading =React.createElement("h1",{class:"sss"},"HARE KRSNA"); //(three parameters are tag , object i.e class or id , content)
const root =ReactDOM.createRoot(document.getElementById("root")); //Creating root where all insertion will take place .here it is id root
//root.render(heading); // rendering heading to root


const container = React.createElement("div",  {id:"container"}  , [heading]); //tag , object i.e class or id,children
root.render(container);// to verify result check inspect in browser(elements and console)


