const ItemList = ({data}) => {
    console.log("🚀 ~ file: ItemList.js:2 ~ ItemList ~ items:", data);

    const image_Api_Url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"


    const handleClick = (event) => {
        console.log("🚀 ~ file: ItemList.js:8 ~ ItemList ~ event:", event)
    }

    return (
        <div>
            { 
                data.map(item => (
                    <div className="border-b-gray-700 border-b-2 p-2 m-5 text-left relative"> 
                        <div className="p-2 m-2 text flex justify-between">
                            <span className="text-[1.22rem]  text-[#3e4152] font-[500]">{item.card.info.name }</span> - 
                            <span className="text-3xl text-stone-600">Rs. {item.card.info.price / 100} </span> 
                        </div>
                        <div className="p-2 m-4 flex">
                            <div id ="food-image-wrapper" ><img id="food-image" className="rounded-[20px] shadow-2xl object-cover w-[400px] h-[200px]" src= { image_Api_Url + item.card.info.imageId }></img></div>
                            <div className="ml-9 mt-10 text-lg text-[#7e808c] tracking-normal leading-9">{item.card.info.description }</div> 
                        </div>
                        <div className="absolute right-5 bottom-16">
                            <button className="w-[130px] h-[50px] bg-teal-600 text-white rounded-3xl" onClick={handleClick}>Add +</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;