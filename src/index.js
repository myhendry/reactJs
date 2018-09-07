import React from "react";
import ReactDOM from "react-dom";

import MyProvider from "./modules/context/MyProvider";
import Nav from "./modules/nav/Nav";
// import "materialize-css/dist/css/materialize.min.css";
import "semantic-ui-css/semantic.min.css";
import "./modules/firebase/firebase";
// import "./styles.css";

function App() {
  return (
    <MyProvider>
      <Nav />
    </MyProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
