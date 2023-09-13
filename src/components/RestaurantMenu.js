import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import userRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const params = useParams();
    
    const resDetail = userRestaurantMenu(params.resId)


    if(resDetail.length === 0)   return (<Shimmer />)
    const res = resDetail[0];
    const itemCards = res.restaurantMenu;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{res.resInfo.name}</h1>
            <p>{res.resInfo.cuisines.join(",")}</p>
            <h2>Menu</h2>
            <ul>
                {  itemCards.map((item)=> <li key={item.card.info.id}> { item.card.info.name } - {  item.card.info.price  }</li>) }
            </ul>
        </div>
    )
}


export default RestaurantMenu;