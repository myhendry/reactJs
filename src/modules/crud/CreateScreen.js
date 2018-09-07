import React, { Component } from "react";

import Header from "../Header";
import firestore from "../firebase/firebase";

class CreateScreen extends Component {
  state = {
    name: "",
    country: "",
    description: "",
    size: "small"
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const employee = {
      ...this.state
    };
    await firestore.collection("employees").add(employee);
    this.props.history.push("/read");
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Create Employee</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div>
            <label>
              Country
              <select
                name="country"
                value={this.state.country}
                onChange={this.onChange}
              >
                <option value="Singapore">Singapore</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Thailand">Thailand</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </label>
          </div>
          <div>
            <div>
              <label>
                Description
                <textarea
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </label>
              <div>
                <label>Size </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="small"
                    checked={this.state.size === "small"}
                    onChange={this.onChange}
                  />
                  Small
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="medium"
                    checked={this.state.size === "medium"}
                    onChange={this.onChange}
                  />
                  Medium
                </label>
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="large"
                    checked={this.state.size === "large"}
                    onChange={this.onChange}
                  />
                  Large
                </label>
              </div>
            </div>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateScreen;
