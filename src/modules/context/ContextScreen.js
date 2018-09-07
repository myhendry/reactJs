import React, { Component } from "react";

import Header from "../Header";
import { MyContext } from "./MyProvider";

class ContextScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>Context</h1>
        <MyContext.Consumer>
          {context => {
            console.log(context);
            return (
              <div>
                <p>{context.state.myName}</p>
                <p>{context.state.age}</p>
                <input type="submit" value="+" onClick={context.incAge} />
                <input type="submit" value="-" onClick={context.decAge} />
              </div>
            );
          }}
        </MyContext.Consumer>
      </React.Fragment>
    );
  }
}

export default ContextScreen;
