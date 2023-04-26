import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileComponent from "./ProfileClass";

/* const About2 = () =>{
    return (
        <div>
            <h1>About Us</h1>
            <p>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
</p>
       <Profile name={"mathi"}/>
       <ProfileComponent name={"Mathi Class Component"} />
    <img className="swiggy-img" src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg" />
        </div>
    )
} */

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent - Constructor.")
    }

    componentDidMount(){
        // Best place to make an API Call
        console.log("Parent- Component did mount");
    }
    render(){
        console.log("Parent- render");
                return(
                    <div>
            <h1>About Us</h1>
<p>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</p>
       {/* <Profile name={"mathi"}/> */}
       <ProfileComponent name={"Child1 Class Component"} />
       <ProfileComponent name={"Child2 Class Component"} />
    <img className="swiggy-img" src="https://careers.swiggy.com/assets/img/Swiggy-Journey.jpg" />
        </div>
                )
    
    }
}

export default About;