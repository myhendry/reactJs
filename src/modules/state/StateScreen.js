import React, { Component } from "react";
import Header from "../Header";

class StateScreen extends Component {
  state = {
    isActive: false,
    name: ""
  };

  _handleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  _handleName = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>State</h1>
        <div style={styles.para}>
          <p>Active: {this.state.isActive.toString()}</p>
          <button type="button" onClick={this._handleActive}>
            Toggle Active
          </button>
        </div>
        <div style={styles.para}>
          <p>My name is {this.state.name}</p>
          <input
            type="text"
            name="name"
            onChange={this._handleName}
            value={this.state.name}
          />
        </div>
        <div style={styles.para}>
          <h4>Conditional Rendering base on state</h4>
          {this.state.isActive ? "It is true" : "It is false"}
        </div>
      </div>
    );
  }
}

const styles = {
  para: { marginTop: 30, marginLeft: 30 }
};

export default StateScreen;
