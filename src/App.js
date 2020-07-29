import React, {Component} from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      double: true
    }
  }

  increment = () => {
    if (this.state.double) {
      if (this.state.count < 19) {
        this.setState({
          count: this.state.count + 2
        })
      }
    } else {
      if (this.state.count < 20) {
        this.setState({
          count: this.state.count + 1
        })
      }
    }
  }

  decrement = () => {
    if (this.state.double) {
      if (this.state.count >= 2) {
        this.setState({
          count: this.state.count - 2
        })
      }
    } else {
      if (this.state.count > 0) {
        this.setState({
          count: this.state.count - 1
        })
      }
    }
  }

  clear = () => {
    this.setState({
      count: 0
    })
  }

  toggle = () => {
    if (this.state.double) {
      this.setState({
        double: false
      })
    } else {
      this.setState({
        double: true
      })
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='navbar'><h1>Counter.React</h1></div>
        <div className='counter'>
          <h1>{this.state.count}</h1>
          <button type='button' onClick={()=> this.increment()}>Increment</button>
          <button type='button' onClick={()=> this.decrement()}>Decrement</button>
          <button type='button' onClick={()=> this.clear()}>Clear</button>
          <button type='button' onClick={()=> this.toggle()}>{this.state.double ? 'Double' : 'Single'}</button>
        </div>

      </div>
    )
  }
}

export default Counter