import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

class StateScreen extends Component {
  state = {
    isVisible: false,
    name: "Initial",
    country: "Singapore",
    title: "Harry Potter",
    author: "Stephen King"
  };

  _handleSubmit = e => {
    e.preventDefault();
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  _handleNameChange = e => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  };

  _handleCountryChange = e => {
    e.preventDefault();
    this.setState({
      country: e.target.value
    });
  };

  _handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _handleSubmit1 = e => {
    e.preventDefault();
    console.log({
      title: this.state.name,
      author: this.state.country
    });
  };

  _handleSubmit2 = e => {
    e.preventDefault();
    console.log({
      title: this.state.title,
      author: this.state.author
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>State</h1>
        <Link to={"/"}>Home >></Link>
        <h2>Press Toggle Button</h2>
        {this.state.isVisible && <h3>Peek a Boo</h3>}
        {this.state.isVisible.toString()}
        <button type="button" onClick={this._handleSubmit}>
          Toggle Me!
        </button>
        <h2>Inputting Text 1</h2>
        <h5>{this.state.name}</h5>
        <h5>{this.state.country}</h5>
        <div>
          <div>
            <input
              type="text"
              onChange={this._handleNameChange}
              value={this.state.name}
            />
          </div>
          <div>
            <input
              type="text"
              onChange={this._handleCountryChange}
              value={this.state.country}
            />
          </div>
          <button type="button" onClick={this._handleSubmit1}>
            Submit Me!
          </button>
        </div>

        <div>
          <h2>Inputting Text 2</h2>
          <div>
            <input
              type="text"
              name="title"
              onChange={this._handleChange}
              value={this.state.title}
            />
          </div>
          <div>
            <input
              type="text"
              name="author"
              onChange={this._handleChange}
              value={this.state.author}
            />
          </div>
          <button type="button" onClick={this._handleSubmit2}>
            Submit Me!
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default StateScreen;
