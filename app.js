import React from "react"
import ReactDOM from "react-dom/client"


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
  <div class="header"> 
    <Title/>       
    <nav class="nav">
            <ul>
             <li>Home</li>
             <li>About Us</li>
             <li>Cart</li>
           </ul>
    </nav>
    </div>
    );
};


const restaurantList= [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "118843",
        "name": "Hotel New Green Taj",
        "uuid": "9d2d5298-5a8c-43a9-9b46-51f7039867c6",
        "city": "103",
        "area": "Belgaum Locality",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "lrghprwruywajbmerufg",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 4.800000190734863,
        "slugs": {
          "restaurant": "hotel-new-green-taj-khanjar-galli-raviwarpeth",
          "city": "belgaum"
        },
        "cityState": "103",
        "address": "CTS 3588 Khanjar Galli Belgaum-590001",
        "locality": "Khade bazar",
        "parentId": 100641,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7219621~p=16~eid=00000189-64b1-922f-175f-cd2f00bc1070~srvts=1689611506223",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "118843",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 4.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "420206",
        "name": "Invitation (Veg & Non Veg)",
        "uuid": "728f9445-4d6e-4c24-834f-961cc24763ab",
        "city": "103",
        "area": "Belgaum Locality",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "esxcgcbjnon4ofhs2lrm",
        "cuisines": [
          "Chinese",
          "North Indian",
          "South Indian",
          "Ice Cream",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 34000,
        "costForTwoString": "₹340 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
          "restaurant": "invitation-(veg-&-non-veg)-tilakwadi-tilakwadi",
          "city": "belgaum"
        },
        "cityState": "103",
        "address": "Between 1st & 2nd Railway Gate, Congress Road, Tilakwadi, Belgaum.",
        "locality": "Shivaji Colony",
        "parentId": 3694,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "420206",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 1.2000000476837158,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.0",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "251442",
        "name": "Hotel Virat Veg- Non Veg",
        "uuid": "0042bac8-1ccc-436a-b6b3-47cef2578a39",
        "city": "103",
        "area": "Belgaum Locality",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "gk3trflrkynau2u4zwoo",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Ice Cream",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "hotel-virat-veg--non-veg-tilakwadi-tilakwadi",
          "city": "belgaum"
        },
        "cityState": "103",
        "address": "4TH\tGATE ANGOL UDYAMBAG ROAD,NEAR KLE COLLEGE,BELGAUM, 590008",
        "locality": "Udyambag Road",
        "parentId": 103353,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹450",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "251442",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "403239",
        "name": "Hotel Surya Yatri Niwas",
        "uuid": "7f04daaf-1a8a-4686-ac91-015d44ef0adc",
        "city": "103",
        "area": "Belgaum Locality",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "am0ba9lzsoklfhxkhnd2",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
          "restaurant": "hotel-surya-yatri-niwas-raviwarpeth-raviwarpeth",
          "city": "belgaum"
        },
        "cityState": "103",
        "address": "34/35, Kapeel Tower, Kapileshwar Road, Belgaum, Karnataka.",
        "locality": "Kapileshwar Road",
        "parentId": 247381,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7213609~p=19~eid=00000189-64b1-922f-175f-cd3000bc1354~srvts=1689611506223",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "403239",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 3.799999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
];
 
const Burger ={
  name : "Burger King",
  image : "https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0",
  cuisines : ["Burger","American"],
  rating : "4.3",
};   


//https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/
const RestaurantCard= ({name,cloudinaryImageId,cuisines,lastMileTravelString})=>{
  return(
    <div className="card">
      <img 
      src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
     cloudinaryImageId }
    />
     <h2>{name}</h2>
      
      <h3>{cuisines.join}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      
    </div>
  )

}

//no key(not acceptable)  <<<< index key(last option)  <<<<<< unique key (best option)  
const Body=()=> ( 
 <div className="RestaurantList"> 

 {restaurantList.map((Restaurant) =>{
   return <RestaurantCard{...Restaurant.data.data} key={Restaurant.data.data.id} />;// verify key if any error or remove key ,if error
 }
 )}
</div>
);

const Footer =()=> <h1>Footer</h1>


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


