import React, { Component } from "react";

import Header from "../Header";
import firestore from "../firebase/firebase";

class UpdateScreen extends Component {
  state = {
    id: "",
    name: "",
    country: "",
    description: "",
    size: ""
  };

  componentDidMount() {
    console.log(this.props);
    this._getEmployee(this.props.match.params.id);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  _onDelete = async (e, id) => {
    e.preventDefault();
    console.log("Delete Pressed", id);
    await firestore
      .collection("employees")
      .doc(id)
      .delete();
    this.props.history.push("/read");
  };

  onSubmit = async e => {
    e.preventDefault();

    const employee = {
      ...this.state
    };
    await firestore
      .collection("employees")
      .doc(employee.id)
      .set({
        name: employee.name,
        country: employee.country,
        description: employee.description,
        size: employee.size
      });
    this.props.history.push("/read");
  };

  _getEmployee = id => {
    const docRef = firestore.collection("employees").doc(id);

    docRef
      .get()
      .then(doc => {
        if (doc.exists) {
          const employee = doc.data();
          this.setState({
            id: doc.id,
            // name: employee.name,
            // country: employee.country,
            // description: employee.description,
            // size: employee.size
            ...employee
          });
        } else {
          console.log("no such document");
        }
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Update Employee</h1>
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
            <label>
              Description
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.onChange}
              />
            </label>
          </div>
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
          <div>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <button onClick={e => this._onDelete(e, this.state.id)}>
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateScreen;
