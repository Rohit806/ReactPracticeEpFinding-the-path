import RestaurantCard from "./restaurant card";
import { restaurantList } from "../constants";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";


function filter(searchText,restaurants){
    const filterdata=restaurants.filter((restaurantsss)=>
    restaurantsss.info?.name.toLowerCase().includes(searchText?.toLowerCase())
    ); // Or write another function ...also button one more note ,,filter ,destructiong js revise

    return filterdata;
}

//no key(not acceptable)  <<<< index key(last option)  <<<<<< unique key (best option) 
const Body=()=> {

   
    const [searchText ,setsearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants ,setAllRestaurants]=useState([]);

    useEffect(()=>
    {
      getRestaurants();

    }, []);


    async function getRestaurants() {
      const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
      const json= await data.json(); 
      console.log(json);// Object of all res card can be seen in console... 
     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     //setrestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      //setrestaurants(json?.data?.cards[2].data);
    }
    //if(!allRestaurants) return null;
    //if(filteredRestaurants?.length===0) return <h1>No Restaurants Match your search !!</h1>;

    return (allRestaurants?.length === 0) ? <Shimmer/> : ( 
    <>
       <div className="search-container">
           <input 
           type="text" 
           className="abc" 
           placeholder="search" 
           value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                 }} />  

        
            <button className="button" onClick={()=> {
              const data=  filter(searchText ,allRestaurants)
            
             setFilteredRestaurants(data);
         
             }}
             >   Click  </button>

        </div>

           {/*The Restaurant is our choosen name to map list object ..it should be same in props also and key also */}
         <div className="RestaurantList"> 
   
      
            {filteredRestaurants.map((Restaurant) =>{
               return <RestaurantCard{...Restaurant?.info} key={Restaurant?.info.id} />;//verify key if any error or remove key ,if error
               }
            )}

 </div>
  </>
  );
  };

  export default Body;