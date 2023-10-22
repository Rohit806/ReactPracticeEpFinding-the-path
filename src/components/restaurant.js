import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer.js";

const Restaurant =()=>{
   const {resId} =useParams();
   const [restaurant , setRestaurant]=useState({});
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
   return( 
        <div>
           <h1>Restaurant</h1>
            <h2>id: {resId}</h2>
            <h2>name: {restaurant?.name}</h2> 
            <h2>area: {restaurant?.areaName}</h2> 
            <h2>city: {restaurant?.city}</h2> 
            <h2>Rating: {restaurant?.avgRating} stars</h2> 
            <h2>Cost For Two: {restaurant?.costForTwoMessage}</h2>

            <h1>Menu{menuItems.name}</h1> 
            {menuItems.map((item) => (
              <div key={item?.id}>
                <h3 className="item-title">{item?.name}</h3>
                </div>))};
        </div>
    )
};

export default Restaurant;