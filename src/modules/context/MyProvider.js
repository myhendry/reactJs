import React, { Component } from "react";

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    myName: "Hi",
    age: 20
  };

  _incAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  };

  _decAge = () => {
    this.setState({
      age: this.state.age - 1
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incAge: this._incAge,
          decAge: this._decAge
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
