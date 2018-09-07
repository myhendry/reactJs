import React, { Component } from "react";

import Header from "../Header";
import "./basicJs";

class BasicScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Javascript</h1>
        <h3>Basics</h3>
        <ul>
          <li>Types</li>
          <li>Variables</li>
          <li>Functions</li>
          <li>Operations</li>
          <li>Array Methods</li>
          <li>Object Methods</li>
          <li>ES6 Destructuring</li>
          <li>Onwards to React</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default BasicScreen;
