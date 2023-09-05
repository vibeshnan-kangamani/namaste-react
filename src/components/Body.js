import { resData } from "../utils/mockData";
import RestaurantCardComponent from "./Restaurant";

import { useState } from "react";


 // Normal JS variable
 //  let ListOfRestaurants = resData;

// ********* Body Component *******************
const BodyComponent = () => {
     // React State Variable
     let [ListOfRestaurants, setListOfRestaurants] = useState(resData);

    // not using key is not acceptable >>>>>>>> you have to use Index as key >>>>> OR >>>>>>> list unique Key ID as a key
    return (
            <div className="body">
                    <div className="top-rated">
                        <button className="top-rated-btn" onClick= { ()=> {
                            const filteredList = ListOfRestaurants = resData.filter(x => x.info.avgRating > 4.5);
                            setListOfRestaurants(filteredList);
                            console.log(filteredList);
                        } }> Top Rated Restaurants</button>
                    </div>
                    <div className="res-container"> 
                            {/* <RestaurantCardComponent resName ="SS Hyderabad Biriryani" cuisines="Biriyani, chettinadu, South Indian, chinese" stars="4.4" time="38 mins"/> */}
                            {/* <RestaurantCardComponent resData={resData} /> */}

                            { ListOfRestaurants.map((res,index) => <RestaurantCardComponent key={res.info.id} resData={res}/>)}
                    </div>
            </div>
    )
}

export default BodyComponent;