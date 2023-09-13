import { useEffect, useState } from "react";

const userRestaurantMenu = (resId) => {

    const [resDetail, setresDetail ] = useState([]); 

    useEffect(()=>{
        fetchMenu();
    },[]);

    fetchMenu = async () =>{
    const Menu_Api = "http://localhost:4300/restaurant-details?Id=";
        const data = await fetch(Menu_Api + resId);
        const json = await data.json();
        setresDetail(json);
    }

    return resDetail; 
}

export default userRestaurantMenu;