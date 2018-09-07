import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";
import firestore from "../firebase/firebase";

class ReadScreen extends Component {
  state = {
    employees: []
  };

  // _listenEmployee = async () => {
  //   await firestore.collection("employees").onSnapshot(snapshot => {
  //     const employees = [];
  //     snapshot.forEach(doc => {
  //       const employee = doc.data();
  //       console.log("ee ", employee);
  //       employees.push({
  //         name: employee.name,
  //         country: employee.country
  //       });
  //     });
  //     console.log(employees);
  //   });
  // };

  async componentDidMount() {
    const employees = [];
    await firestore
      .collection("employees")
      .get()
      .then(snapShot => {
        snapShot.forEach(doc => {
          employees.push({
            key: doc.id,
            ...doc.data()
          });
        });
        this.setState({
          employees
        });
      });
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        <Header />
        <h1>Employees List</h1>
        {employees &&
          employees.map(employee => (
            <div key={employee.key}>
              {employee.name} {employee.country} {employee.description}{" "}
              {employee.size}
              <Link to={`/update/${employee.key}`}>{employee.name}</Link>
            </div>
          ))}
      </div>
    );
  }
}

export default ReadScreen;
