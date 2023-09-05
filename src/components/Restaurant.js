import { Food_IMAGE_URL } from "../utils/constant";

const resCardStyle  = { backgroundColor : "lightgrey" };

// ********* Restaurant Card Component **************
const RestaurantCardComponent = (props) => {  /// {resName, cuisines, stars, time }
        
        // const {resName, cuisines, stars, time } = props;  // javascript concept of destructuring object
        const { resData } = props;

        const { name, cuisines, avgRating ,sla, cloudinaryImageId } = resData.info;
        // console.log(props);
        return (
                <div className="res-card" style={resCardStyle}>
                        <img className="res-card-img" src={ Food_IMAGE_URL + cloudinaryImageId} />
                        <h3>{name}</h3>
                        <h3>{cuisines.join(", ")}</h3>
                        <h3>{avgRating} ⭐</h3>
                        <h3>{sla.deliveryTime}</h3>
                </div>
        )
}

export default RestaurantCardComponent;