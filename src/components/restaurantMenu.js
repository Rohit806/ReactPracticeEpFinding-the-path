import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer.js";
import { IMG_CDN_URL } from "../constants.js";

const Restaurant =()=>{
   const {resId} =useParams();//resId bcoz in app.js in CreateBrowserRoute we have used resId for dynamic route and same has to be passed in UI<h1> tag
   const [restaurant , setRestaurant]=useState(null);
   //Initial render we keep Null as if it takes time to load fetch url,we will get error,so instead kepp it
   //null and if null is found we return shimmer as done below at return()
   const [menuItems, setMenuItems] = useState([]);


   useEffect(()=>{
      getRestaurantInfo();
   },[])

   async function getRestaurantInfo(){
    //Fetch Menu Items Api from Swiggy(From Chetan Nada's Repo
    const data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+resId);
    const json=await data.json();
    console.log(json.data);
    const restaurantData =json.data.cards[0]?.card?.card?.info || null ;
    setRestaurant(restaurantData);

    //PATH FOR MENU ITEMS::= const restaurantMenu = json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1]?.card?.info|| null; 
     //To get Menu Item List (Chetan Nada's repo)
    const MENU_ITEM_TYPE_KEY="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    const menuItemsData =json?.data?.cards.find(x=> x.groupedCard)?.
    groupedCard?.cardGroupMap?.REGULAR?.
    cards?.map(x => x.card?.card)?.
    filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
    map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];

    const uniqueMenuItems = [];
     menuItemsData.forEach((item) => {
         if (!uniqueMenuItems.find(x => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
    })
     setMenuItems(uniqueMenuItems);
  
    //console.log to just see Object data in console //Not Necessary for Production app 
    console.log(restaurantData);
    console.log(menuItemsData);
    console.log(uniqueMenuItems);
   
   
   }
   return(!restaurant)? <Shimmer/>:( 
        <div className="menu">
           <div>
            <h1>Restaurant</h1>
            <h2>id: {resId}</h2>
            <h2>name: {restaurant?.name}</h2>
            <img src= {IMG_CDN_URL + restaurant?.cloudinaryImageId }></img>
            <h2>area: {restaurant?.areaName}</h2> 
            <h2>city: {restaurant?.city}</h2> 
            <h2>Rating: {restaurant?.avgRating} stars</h2> 
            <h2>Cost For Two: {restaurant?.costForTwoMessage}</h2>
          </div>
           <div>
               <h1>MENU</h1>
               <ul>
               {menuItems?.map((item) => (
               <div key={item?.id}>
                    <li><h3 className="item-title">{item?.name}</h3></li>
               </div>))};
               </ul> 
          </div>
         </div>
      )
};

export default Restaurant;