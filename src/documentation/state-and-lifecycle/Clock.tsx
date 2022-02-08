import React, { Component } from "react";

interface AppState {
  date: Date
}

class Clock extends Component<{}, AppState> {
  constructor( {date}: AppState ){
    super( date )
    this.state = {date: new Date()}
  }

  componentDidMount(){
    setInterval(
      () => this.tick(),
      1000
    )
  }

  tick(){
    this.setState({date: new Date()})
  }

  render(): React.ReactNode {
      return(
        <>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </>
      )
  }
}

export default Clock;