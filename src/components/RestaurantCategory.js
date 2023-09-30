import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data , showItems, setShowIndex}) => {

    // const  [ showItems, setShowItems ] = useState(false);
 
    const handleClick = () => {
        setShowIndex();
    }

    console.log("🚀 ~ file: RestaurantCategory.js:2 ~ RestaurantCategory ~ props:", data)
    return (
        <div className="bg-gray-100 m-auto w-6/12" onClick={handleClick}>
            <div className="my-5 p-4 shadow-xl font-bold flex justify-between cursor-pointer"> <span className="text-lg">{ data.title } ({data.itemCards.length})   </span> <span className="">🔽</span> </div>
            { showItems &&  <ItemList data={data.itemCards}/> }
        </div>
    )
}

export default RestaurantCategory;