import React, { Component } from "react";

import Header from "../Header";

class PropScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Props</h1>
        <ChildOne data="props passed" />
      </React.Fragment>
    );
  }
}

const ChildOne = ({ data }) => {
  return (
    <React.Fragment>
      <h3>Child One</h3>
      <p>{data}</p>
      - - - - - - - - - - - - - -
      <ChildTwo data2={data} />
    </React.Fragment>
  );
};

const ChildTwo = props => {
  return (
    <React.Fragment>
      <h3>Child Two</h3>
      <p>{props.data2}</p>
      - - - - - - - - - - - - - -
    </React.Fragment>
  );
};

export default PropScreen;
