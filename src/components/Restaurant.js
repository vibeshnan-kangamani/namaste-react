import { Food_IMAGE_URL } from "../utils/constant";

const resCardStyle  = { backgroundColor : "lightgrey" };

// ********* Restaurant Card Component **************
const RestaurantCardComponent = (props) => {  /// {resName, cuisines, stars, time }
        
        // const {resName, cuisines, stars, time } = props;  // javascript concept of destructuring object
        const { resData } = props;

        const { name, cuisines, avgRating ,sla, cloudinaryImageId } = resData.info;
        // console.log(props);
        return (
                <div className="res-card h-full p-4 rounded-3xl hover:shadow-yellow-200 shadow-slate-600 bg-gray-300 hover:bg-teal-600 shadow-2xl hover:text-white">
                        <div className="flex items-center w-full justify-center"><img className="res-card-img w-[200px] h-[200px] shadow-2xl rounded-3xl" src={ Food_IMAGE_URL + cloudinaryImageId} /></div>
                        <h3 className="mt-4 font-extrabold text-lg">{name}</h3>
                        <h3>{cuisines.join(", ")}</h3>
                        <h3>{avgRating} ⭐</h3>
                        <h3>{sla.deliveryTime}</h3>
                </div>
        )
}



// ************************Restaurant Card Offer**********************
export const WithOffer = (RestaurantCardComponent) =>{ // you have to pass the component in order to return a component
        return (props)=> (                
                <div className="relative h-full hover:text-white">
                        <label className="absolute bottom-0 right-4 truncate font-bold antialiased hover:text-white text-fuchsia-950 shadow-green-600 shadow-2xl">{props.resData.info.aggregatedDiscountInfoV3.header} {props.resData.info.aggregatedDiscountInfoV3.subHeader}</label>
                        <RestaurantCardComponent {...props}/>
                </div>
        )
}


export default RestaurantCardComponent;