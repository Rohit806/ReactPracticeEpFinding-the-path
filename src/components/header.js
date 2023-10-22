import { useState } from "react";
import logo from "../assets/img/food-villa.jpg";
import { Link } from "react-router-dom";

  const Title =()=>( 
                    // anchor tag a, </> takes to home page on click.
    <a href="/">  
     <img className="logo"
     alt="logo"
      id="abab"
                    // 1) with url// src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"/>
     src={logo} />  
    </a>            // 2) with downloaded offline img logo  
  );
  
  const Header = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false); //We use boolean as in logged in condition we use ternary ope which accpets boolean
   
    return(  
     <div className="header"> 
      <Title/>       
      <nav className="nav">
              <ul>
               <li><Link to="/">Home </Link></li>
               <li><Link to="/about">About Us </Link></li>
               <li><Link to="/contact">Contact </Link></li>
               <li>Cart</li>
             </ul>
      </nav>

      {(isLoggedIn) ? //initially isLoggedIn is false so second cond is printed(login) ,when we click on button isLoggedIn is set to true so first cond Logout is printed
      (<button  onClick={()=>setIsLoggedIn(false)} >Logout</button>) : 
      (<button onClick={()=>setIsLoggedIn(true)}>Login</button>) }
      </div>
      );
  };

  export default Header;