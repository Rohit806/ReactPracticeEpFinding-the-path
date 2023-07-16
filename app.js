import React from "react"
import ReactDOM from "react-dom/client"

/*
console.log("Hello World");

//Insertion of Hello World using DOM Manipulation
let a=document.createElement("h2");
a.innerHTML="Hello World";
let b=document.getElementById("abc");
b.appendChild(a);

//Insertion of Hello World using React
const heading =React.createElement("h1",
{className:"sss" ,key:"h1"},
"HARE KRSNA"); //(three parameters are tag , object i.e class or id , content)


//root.render(heading); // rendering heading to root


const container = React.createElement("div", 
 {id:"container"}  ,
  [heading]); //tag , object i.e class or id,children    */


const Head =()=>(   //This is Functional Component ,{}and return is nou used as it is shortcut of
                      // Arrow function , in below functional component Head2 long form is used
  <div>
       <h1>HARI BOL</h1>
       <h1>HARI HARI</h1>
</div>);

const Head2 = () => {
    return(          //calling one func component in another .also <Head/> can be used in div here
    <div>
       {Head()}       
      <h1>This is Funcional Component</h1>
    </div>
    );
};

const root =ReactDOM.createRoot(document.getElementById("root")); //Creating root where all insertion will take place .here it is id root
root.render(<Head2/>);// to verify result check inspect in browser(elements and console)


