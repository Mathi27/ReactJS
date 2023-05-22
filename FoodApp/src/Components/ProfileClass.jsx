import React from "react";

class ProfileComponent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count:0,
        }
        console.log("child- constructor "+this.props.name);
    
    }

    componentDidMount(){
        console.log("Child- component did mount."+this.props.name)
    }

    render(){
      console.log("Child Render."+this.props.name);
        return (
            <React.Fragment>
            <h2>Class Profile Component</h2>
            <h3>Name:{this.props.name}</h3>
            <h3>Count:{this.state.count}</h3>
            <button onClick={()=>{
                this.setState({
                   count:+1,
                }) 
            }}>Click me</button>
            <h4>This is the class component of the profile</h4>
            </React.Fragment>
     
        )
    }
}

export default ProfileComponent;