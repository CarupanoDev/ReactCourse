import React, { Component } from "react";

interface AppState{
    isToogleOn: Boolean
}

class Toogle extends Component<{}, AppState>{
    constructor( props: object ){
        super(props);
        this.state = {isToogleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToogleOn: !prevState.isToogleOn
        }))
    }

      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToogleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
}

export default Toogle;