import {  useState, useEffect } from "react";

import { APP_LOGO_URL } from "../utils/constant";

import { Link } from "react-router-dom";
import userOnlineStatus from "../utils/useOnlineStatus";

// * **** Header Component  ********
const HeaderComponent  = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = userOnlineStatus();

    // ? If No Dependency Array ===> the UseEffect is called on every Render and Rerender
    // ? If Dependency Array is  [] empty array ===> the UseEffect is called only once
    useEffect(()=>{
        console.log("Header Component Use Efftect");
    });


    return ( 
            <div className="flex">
                    <div className="logo-container">
                            <img className="logo" src= { APP_LOGO_URL } />
                    </div>
                    <div className="nav-items">
                            <ul>
                                    <li>Online Status: { !onlineStatus ? "🔴":"🟢"}</li>
                                    <li> <Link to="">Home</Link> </li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/grocery">Grocery</Link></li>
                                    <li><Link to="">Cart</Link></li>
                                    <button className="login-btn" onClick={ ()=> {
                                       btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                                    }}>{ btnName }
                                    </button>
                            </ul>
                    </div>
            </div>
    )
}

export default HeaderComponent;