import { restaurantList } from "../constants";

const Shimmer = ()=>{

return(
         <>
         <div className="RestaurantList"> 
         { Array(10)
           .fill("")
             .map((e) => (
                 <div className="Shimmer"></div>
             ))
        }

          </div>
        </>
    );
};
         



export default Shimmer;