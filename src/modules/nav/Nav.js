import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "../Header";
import BasicScreen from "../js/BasicScreen";
import StyleScreen from "../styling/StyleScreen";
import PropScreen from "../props/PropScreen";
import StateScreen from "../state/StateScreen";
import LifecycleScreen from "../lifecycle/LifecycleScreen";
import ComponentScreen from "../component/ComponentScreen";
import ContextScreen from "../context/ContextScreen";
import RemoteScreen from "../remote/RemoteScreen";
import CreateScreen from "../crud/CreateScreen";
import UpdateScreen from "../crud/UpdateScreen";
import ReadScreen from "../crud/ReadScreen";
import MaterialScreen from "../materialize/MaterialScreen";
import DesignScreen from "../semantic/DesignScreen";
import FormScreen from "../crud/FormScreen";
import HTMLForm from "../crud/HTMLForm";
import HomeScreen from "../semantic/HomeScreen";
import LoginForm from "../../advanced/reduxForm/LoginForm";
import EventForm from "../../advanced/reduxForm/EventForm";
import StyleForm from "../../advanced/semanticUI/StyleForm";

class Nav extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={HomeScreen} />
            <Route path="/js" component={BasicScreen} />
            <Route path="/prop" component={PropScreen} />
            <Route path="/state" component={StateScreen} />
            <Route path="/component" component={ComponentScreen} />
            <Route path="/lifecycle" component={LifecycleScreen} />
            <Route path="/context" component={ContextScreen} />
            <Route path="/remote" component={RemoteScreen} />
            <Route path="/read" component={ReadScreen} />
            <Route path="/create" component={CreateScreen} />
            <Route path="/update/:id" component={UpdateScreen} />
            <Route path="/temp" component={HTMLForm} />
            <Route path="/style" component={StyleScreen} />
            <Route path="/design" component={DesignScreen} />
            <Route path="/form" component={FormScreen} />
            <Route path="/login" component={LoginForm} />
            <Route path="/event/:id" component={EventForm} />
            <Route path="/other" component={StyleForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Nav;
