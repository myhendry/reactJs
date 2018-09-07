import React, { Component } from "react";
import { Link } from "react-router-dom";

class HTMLForm extends Component {
  state = {
    size: "medium"
  };

  handleChange = e => {};

  render() {
    return (
      <form>
        <h1>HTML Form</h1>
        <Link to={"/"}>Home</Link>
        <p>This is a form</p>
        <div>
          <label>Title </label>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Email </label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password </label>
          <input type="password" name="password" />
        </div>
        <div>
          <textarea name="message" rows="10" cols="30" />
        </div>
        <div>
          <select>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Motorola</option>
          </select>
        </div>
        <div>
          <input
            type="radio"
            value="medium"
            checked={this.state.size === "medium"}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>
            <input type="checkbox" name="secret" />
            Join Us
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default HTMLForm;
