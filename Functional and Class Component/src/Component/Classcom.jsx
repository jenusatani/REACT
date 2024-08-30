import React, { Component } from 'react'

export default class Classcom extends Component {

    constructor(props){
        super(props)
        this.state={count:0}
    }

    increment=()=>{
        this.setState({count: this.state.count + 1})
    }


  render() {
    return (
      <div>
        <h1>ClassComponent</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Click It</button>
      </div>
    )
  }
}