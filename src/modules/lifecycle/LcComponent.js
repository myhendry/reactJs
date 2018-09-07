import React, { Component } from "react";

class LcComponent extends Component {
  componentDidMount() {
    console.log("child mounted");
  }

  componentWillReceiveProps(newProps) {
    console.log("component will receive new props", newProps);
  }
  render() {
    return (
      <div>
        <h3>Lifecycle Component</h3>
        <p>From LcComponent : {this.props.age}</p>
      </div>
    );
  }
}

export default LcComponent;
