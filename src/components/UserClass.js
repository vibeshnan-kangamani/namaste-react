import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            count1: 1
        }
    }

    
    componentDidMount(){
        console.log("child mounted (userclass component");
    }

    render(){
        console.log("child rendered")
        const {name, location} = this.props;
        const {count1} = this.state;
        return(
            <div className="user-container">
            <h1>count:  {count1}</h1>
            <button onClick={()=>{ 
                this.setState({
                    count1: count1 +1
                })
            }}>increment</button>
            <h2>Name: {name}</h2>
            <h2>Passionate Web Developer</h2>
            <h2> Location: {location}</h2>
        </div>
        )
    }
}

export default UserClass;