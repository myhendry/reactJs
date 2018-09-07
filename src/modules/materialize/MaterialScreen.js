import React, { Component } from "react";
import { Link } from "react-router-dom";

class MaterialScreen extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-2 ">
            <Link to={"/"} className="left brand-logo">
              Logo
            </Link>
          </div>
        </nav>
        <div className="row">
          <div className="col s8">
            <img
              class="materialboxed"
              width="450"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"
            />
          </div>
          <div className="col s4">
            <div className="section">
              <div class="collection">
                <ul>
                  <li className="collection-item center-align">
                    <Link to={"/js"}>Javascript </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/state"}>State </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/prop"}>Props </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/component"}>Component </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/lifecycle"}>Lifecycle </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/context"}>Context </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/remote"}>Remote </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/style"}>Style </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/read"}>Read </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/create"}>Create </Link>
                  </li>
                  <li className="collection-item center-align">
                    <Link to={"/material"}>Materialize </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="divider" />
            <div className="section">
              <div class="row">
                <div class="col s6">
                  <div>
                    <i class="medium material-icons">contact_phone</i>
                  </div>
                  <div>Call Us</div>
                </div>
                <div>
                  <i class="medium material-icons">contact_phone</i>
                </div>
                <div>Call Us</div>
              </div>
            </div>
          </div>
        </div>
        <footer class="page-footer teal lighten-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <p class="grey-text text-lighten-4">
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2018 Copyright Bulbtech LLC</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default MaterialScreen;
