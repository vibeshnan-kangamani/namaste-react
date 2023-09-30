import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import userRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    useEffect(()=>{
        fetchMenu();
    },[]);


    const  [ showIndex, setShowIndex] = useState(0);
    
    // let [resMenuItems, setresMenuItems] = useState([]);
    const params = useParams();
    
    const resDetail = userRestaurantMenu(params.resId)


    if(resDetail.length === 0)   return (<Shimmer />)
    const res = resDetail[0];
    const resMenuItems = res.cards.filter(x => x.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // setresMenuItems(val );
    console.log("🚀 ~ file: RestaurantMenu.js:21 ~ RestaurantMenu ~ resMenuItems:", resMenuItems)
    return (
        <div className="menu text-center">
            { resMenuItems.map((category, index) =>  
                <RestaurantCategory data={category.card.card} showItems={ index === showIndex && true } key={category.card.card.title}  setShowIndex ={ () => setShowIndex(index)}/>
            ) }
        </div>
    )
}


export default RestaurantMenu;