import { useState } from "react";

const User = (props)=>{

    const {name, location} = props;

    const [count1, setCount1] = useState(1);

    return (
        <div className="user-container">
            <h1>count:  {count1}</h1>
            <button onClick={()=>{ setCount1(count1+1)}}>increment</button>
            <h2>Name: {name}</h2>
            <h2>Passionate Web Developer</h2>
            <h2> Location: {location}</h2>
        </div>
    )
}

export default User;