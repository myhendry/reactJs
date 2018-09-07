import React, { Component } from "react";

import Header from "../Header";
import { intro, para } from "./moreStyles.js";

class StyleScreen extends Component {
  // state = {
  //   title: "",
  //   author: ""
  // };

  render() {
    const { h1Style } = styles;
    return (
      <div>
        <Header />
        <div style={{ margin: "10px", border: "5px solid black" }}>
          <ul>
            <h3>View</h3>
            <li>flex</li>
            <li>justifyContent</li>
            <li>alignItems</li>
            <li>backgroundColor</li>
            <li>color</li>
            <li>height</li>
            <li>padding</li>
            <li>margin</li>
          </ul>
          <ul>
            <h3>Text</h3>
            <li>color</li>
            <li>textAlign</li>
            <li>fontSize</li>
            <li>fontWeight</li>
            <li>fontStyle</li>
          </ul>
        </div>

        <div
          style={{
            backgroundColor: "#39FF14",
            height: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          backgroundColor: "#39FF14", height: 100, display: "flex",
          justifyContent: "center", alignItems: "center"
        </div>
        <div style={{ display: "flex", flexDirection: "row", height: 100 }}>
          <div
            style={{
              backgroundColor: "black",
              // display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              padding: 30
            }}
          >
            backgroundColor: "black", display: "flex", flex: 1, alignItems:
            "center", justifyContent: "center", color: "white"
          </div>
          <div
            style={{
              backgroundColor: "white",
              // display: "flex",
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
              padding: 30
            }}
          >
            backgroundColor: "white", display: "flex", flex: 1, alignItems:
            "center", justifyContent: "center"
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", height: 100 }}>
          <div
            style={{
              backgroundColor: "blue",
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              color: "yellow",
              padding: 30
            }}
          >
            backgroundColor: "black", display: "flex", flex: 1, alignItems:
            "center", justifyContent: "center", color: "white"
          </div>
          <div
            style={{
              backgroundColor: "yellow",
              display: "flex",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              padding: 30,
              color: "blue"
            }}
          >
            backgroundColor: "white", display: "flex", flex: 1, alignItems:
            "center", justifyContent: "center"
          </div>
        </div>
        <div style={h1Style}>
          <h5>
            margin: "30px", border: "5px solid blue", fontSize: "30px", color:
            "grey", textAlign: "center"
          </h5>
          <h2>H2</h2>
          <h3>H3</h3>
          <h4>H4</h4>
          <h5>H5</h5>
        </div>
        <div>
          <h2
            style={{
              color: "purple",
              fontSize: 100,
              fontWeight: "bold",
              fontStyle: "italic",
              textAlign: "center"
            }}
          >
            STYLE TEXT
          </h2>
        </div>

        <div style={intro}>
          <p>From More Styles - External File</p>
        </div>
        <div>
          <p style={para}>From More Styles 2</p>
          <p style={para}>From More Styles 3</p>
        </div>
      </div>
    );
  }
}

const styles = {
  h1Style: {
    margin: "30px",
    border: "5px solid blue",
    color: "grey",
    textAlign: "center"
  }
};

export default StyleScreen;
