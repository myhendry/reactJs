import React, { Component } from "react";

import Header from "../Header";
import LcComponent from "./LcComponent";

class LifecycleScreen extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      age: 30
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "NEW IN REACT 16.3 - getDerivedStateFromProps",
      nextProps,
      prevState
    );
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "NEW IN REACT 16.3 - getSnapshotBeforeUpdate",
      prevProps,
      prevState
    );
    return null;
  }

  componentWillMount() {
    console.log("DEPRECATING - component will mount");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("DEPRECATING - component will receive props", nextProps);
  }

  componentWillUpdate(nextState, nextProps) {
    console.log("DEPRECATING - component will update", nextState, nextProps);
  }

  componentDidUpdate(nextState, nextProps) {
    console.log("component did update", nextState, nextProps);
  }

  shouldComponentUpdate(nextState, nextProps) {
    console.log("should component update", nextState, nextProps);
    return true;
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  _handleSubmit = () => {
    this.setState({
      age: this.state.age + 1
    });
  };

  render() {
    console.log("rendered");
    return (
      <div>
        <Header />
        <h1>Lifecycle</h1>
        <p>From LifecycleScreen : {this.state.age}</p>
        <LcComponent age={this.state.age} />
        <button onClick={this._handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default LifecycleScreen;
