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
            <div className="flex justify-between  shadow-lg bg-teal-600">
                    <div className="logo-container m-4 w-20 h-24">
                            <img className="logo w-20 h-24 block mx-auto rounded-full sm:mx-0 sm:shrink-0 bg-white" src= { APP_LOGO_URL } />
                    </div>
                    <div className="nav-items">
                            <ul className="flex p-4 m-4 gap-10 text-xl text-slate-100 ">
                                    <li className="hover:text-lime-500">Online Status: { !onlineStatus ? "🔴":"🟢"}</li>
                                    <li className="hover:text-lime-500"> <Link to="">Home</Link> </li>
                                    <li className="hover:text-lime-500"><Link to="/about">About Us</Link></li>
                                    <li className="hover:text-lime-500"><Link to="/contact">Contact Us</Link></li>
                                    <li className="hover:text-lime-500"><Link to="/grocery">Grocery</Link></li>
                                    <li className="hover:text-lime-500"><Link to="">Cart</Link></li>
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