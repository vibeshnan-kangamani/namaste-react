import { Link } from "react-router-dom";
import { resData } from "../utils/mockData";

import RestaurantCardComponent, { WithOffer} from "./Restaurant";
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

     // ***** HIGHER ORDER COMPONENTS
     const RestaurantsWithOffer = WithOffer(RestaurantCardComponent); // ? Now the Component has Restaurant Component in it

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
                    <div className="top-rated m-5 flex gap-10 w-4/5">
                        <div className="search w-6/12 flex">
                            <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-48 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." value={searchText} onChange={ (e) => setSearchText(e.target.value)} ></input>
                            <button className="search-btn ml-9 bg-slate-600 font-medium w-32 h-9 rounded-full text-white" onClick={()=>{
                                filteredRestaurant = ListOfRestaurants.filter(x=> x.info.name.toLowerCase().includes(searchText.toLowerCase()));
                                console.log(filteredRestaurant);
                                setfilteredRestaurant(filteredRestaurant);
                            }}>search </button>
                            <button className="top-rated-btn  bg-orange-600 font-medium w-60 h-9 ml-8 rounded-full text-white" onClick= { ()=> {
                            filteredRestaurant = ListOfRestaurants = resData.filter(x => x.info.avgRating > 4.5);
                            setfilteredRestaurant(filteredRestaurant);
                        } }> Top Rated Restaurants</button>
                        </div>
                        
                    </div>
                    <div className="res-container flex flex-wrap  p-5"> 
                            {/* <RestaurantCardComponent resName ="SS Hyderabad Biriryani" cuisines="Biriyani, chettinadu, South Indian, chinese" stars="4.4" time="38 mins"/> */}
                            {/* <RestaurantCardComponent resData={resData} /> */}

                            { filteredRestaurant.map((res,index) => (
                            <Link to={"/restaurant-menu/"+ res.info.id } key={res.info.id} className="w-64 items-stretch m-7">

                                { 
                                    res.info.aggregatedDiscountInfoV3?.header ? (<RestaurantsWithOffer resData={res} />) : (<RestaurantCardComponent key={res.info.id} resData={res}/>)
                                }
                                
                            </Link>))
                            }
                    </div>
            </div>
    )
}

export default BodyComponent;