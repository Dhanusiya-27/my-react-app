import React, { Component } from 'react'

export default class ComponentLifeCycle extends Component {
    constructor()
    {
        super(props);
        this.state={favColor:"yellow"}
    }
    componentDidMount()
    {
        setTimeout(()=>{this.setState({favColor:"blue"})},5000)
    }
    shouldComponentUpdate()
    {
        return true
    }
  render() {
    return (
      <div>
        <h1>My Favorite color is {this.state.favColor}</h1>
      </div>
    )
  }
}
