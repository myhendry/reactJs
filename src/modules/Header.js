import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <Link to={"/"}>Home | </Link>
        <Link to={"/js"}>Javascript | </Link>
        <Link to={"/component"}>Component | </Link>
        <Link to={"/state"}>State | </Link>
        <Link to={"/prop"}>Props | </Link>
        <Link to={"/lifecycle"}>Lifecycle | </Link>
        <Link to={"/context"}>Context | </Link>
        <Link to={"/remote"}>Remote | </Link>
        <Link to={"/style"}>Style | </Link>
        <Link to={"/read"}>Read | </Link>
        <Link to={"/create"}>Create | </Link>
      </div>
    );
  }
}

export default Header;
