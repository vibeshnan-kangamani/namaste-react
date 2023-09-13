import { Component } from "react";
import UserClass from "./UserClass";
import User from "./user";

// const AboutComponent = () => {
//     return (
//         <div>
//             <h1>This is Namaste React Food App 😋🍉🍌</h1>
//             <User name={"vibeshnan"} location="chennai"/>
//             <UserClass name={"vibeshnan"} location="chennai"/>
//         </div>
//     )
//  }

class AboutComponent extends Component{
    constructor(props){
        super(props);

        console.log(props);
    }

    componentDidMount(){
        console.log("parent mounted (about component)");
    }

    render(){
        console.log("parent render");
        return (
            <div>
                <h1>This is Namaste React Food App 😋🍉🍌</h1>
                <User name={"vibeshnan"} location="chennai"/>
                <UserClass name={"vibeshnan"} location="chennai"/>
            </div>
        )
    }
}

 export default AboutComponent;