import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

const StatelessComponent = () => {
  return (
    <div>
      <p>I am a Stateless Component</p>
      <p>- - - - - - - - - - - </p>
    </div>
  );
};

class StatefulComponent extends Component {
  state = {
    title: "I am a Stateful Component"
  };
  componentDidMount() {
    this.setState({
      title: "I am still a Stateful Component"
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>- - - - - - - - - - - </p>
      </div>
    );
  }
}

class ComponentScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Component</h1>
        <Link to={"/"}>Home >></Link>
        <StatelessComponent info={"hello"} />
        <StatefulComponent info={"hello"} />
      </React.Fragment>
    );
  }
}

export default ComponentScreen;
