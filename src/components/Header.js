import { APP_LOGO_URL } from "../utils/constant";

// * **** Header Component  ********
const HeaderComponent  = () => {
    return ( 
            <div className="header">
                    <div className="logo-container">
                            <img className="logo" src= { APP_LOGO_URL } />
                    </div>
                    <div className="nav-items">
                            <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Contach Us</li>
                                    <li>Cart</li>
                            </ul>
                    </div>
            </div>
    )
}

export default HeaderComponent;