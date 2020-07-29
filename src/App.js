import React, {Component} from 'react'

class Welcome extends React.Component {
  super()
  constructor(){
    state = {
      name: 'Aidan'
    }
  }
  
  render() {
    return (
    <h1>Hello {this.state.name}</h1>
    )
  }
}

export default Welcome