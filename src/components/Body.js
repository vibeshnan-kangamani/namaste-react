import { Link } from "react-router-dom";
import { resData } from "../utils/mockData";

import RestaurantCardComponent from "./Restaurant";
import Shimmer from "./shimmer";

import { useEffect, useState } from "react";
import userOnlineStatus from "../utils/useOnlineStatus";



 // Normal JS variable
 //  let ListOfRestaurants = resData;

// ********* Body Component *******************
const BodyComponent = () => {
     // React State Variable
     let [ListOfRestaurants, setListOfRestaurants] = useState([]);
     let [filteredRestaurant, setfilteredRestaurant] = useState([]);
     let [searchText, setSearchText] = useState("");

     const onlineStatus = userOnlineStatus();


     useEffect(()=>{
        console.log("Body Component rendered");
        fetchData();
     }, []);

     // config call
     const  fetchData = async ()=>{
       const data = await fetch("http://localhost:4300/restaurants");

    //   console.log("fetched",await data.json());
      const jsoon = await data.json();
      setListOfRestaurants(jsoon);
      setfilteredRestaurant(jsoon);
     }

     if(onlineStatus == false) return ( <h1>Looks likes you are offline</h1>)
    // not using key is not acceptable >>>>>>>> you have to use Index as key >>>>> OR >>>>>>> list unique Key ID as a key
    return ListOfRestaurants.length == 0 ? <Shimmer /> :(
            <div className="body">
                    <div className="top-rated">
                        <div className="search">
                            <input type="text" className="search-text" value={searchText} onChange={ (e) => setSearchText(e.target.value)} ></input>
                            <button className="search-btn" onClick={()=>{
                                filteredRestaurant = ListOfRestaurants.filter(x=> x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                console.log(filteredRestaurant);
                                setfilteredRestaurant(filteredRestaurant);
                            }}>search </button>
                        </div>
                        <button className="top-rated-btn" onClick= { ()=> {
                            filteredRestaurant = ListOfRestaurants = resData.filter(x => x.info.avgRating > 4.5);
                            setfilteredRestaurant(filteredRestaurant);
                            console.log(filteredList);
                        } }> Top Rated Restaurants</button>
                    </div>
                    <div className="res-container"> 
                            {/* <RestaurantCardComponent resName ="SS Hyderabad Biriryani" cuisines="Biriyani, chettinadu, South Indian, chinese" stars="4.4" time="38 mins"/> */}
                            {/* <RestaurantCardComponent resData={resData} /> */}

                            { filteredRestaurant.map((res,index) => <Link to={"/restaurant-menu/"+ res.info.id } key={res.info.id} ><RestaurantCardComponent key={res.info.id} resData={res}/></Link>)}
                    </div>
            </div>
    )
}

export default BodyComponent;