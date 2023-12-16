import React, {Component} from "react";
class StateClassCom extends Component
{
    state={
        color:"Blue",
        price:121
    }
    handleChange=()=>{this.setState({color:"Black"})}
    render()
    {
        return(
            <div>
                <h1>My Favourite is {this.state.color} but its price is {this.state.price}</h1>
                <button onClick = {this.handleChange}>Click me</button>
            </div>
        )
    }
}
export default StateClassCom;