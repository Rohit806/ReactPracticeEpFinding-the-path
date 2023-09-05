  const Title =()=>( 
    // anchor tag a, </> takes to home page on click.
    <a href="/">  
     <img className="logo"
     alt="logo"
      id="abab"
     src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"/>
    </a>
  );
  
  const Header = () => {
    return(  
    <div className="header"> 
      <Title/>       
      <nav className="nav">
              <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Cart</li>
             </ul>
      </nav>
      </div>
      );
  };

  export default Header;