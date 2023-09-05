import RestaurantCard from "./restaurant card";
import { restaurantList } from "../constants";
import { useState } from "react";


function filter(searchText,restaurants){
    const filterdata=restaurants.filter((restaurantsss)=>
    restaurantsss.data.data.name.includes(searchText)
    ); // Or write another function ...also button one more note ,,filter ,destructiong js revise

    return filterdata;
}

//no key(not acceptable)  <<<< index key(last option)  <<<<<< unique key (best option) 
const Body=()=> {
   
    const [searchText ,setsearchText]=useState("abc");
    const [restaurants ,setrestaurants]=useState(restaurantList);

    return ( 
    <>
       
        <input type="text" className="abc" placeholder="search" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
        }}  />  

        
        <button className="button" onClick={()=> {
           const data=  filter(searchText ,restaurants)
            
             setrestaurants(data);
         
           }}

        >   Click  </button>

{/*The Restaurant is our choosen name to map list object ..it should be same in props also and key also */}
   <div className="RestaurantList"> 
        {restaurants.map((Restaurant) =>{
           return <RestaurantCard{...Restaurant.data.data}  key={Restaurant.data.data.id} />;//verify key if any error or remove key ,if error
         }
        )}
  
    </div>
  </>
  );
  };

  export default Body;