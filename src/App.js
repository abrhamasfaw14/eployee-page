import React, { Component } from "react";
import Employeepage from "./Components/EmployeePage";
import "./App.css";
import Header from "./Components/Header";

class App extends Component {
  state = {
    employee: [
      {
        id: 1,
        name: "Julie Talor",
        position: "VIP of Marksting",
        photo: require("./Components/person-one.jpeg"),
        phone1: "Call Phone",
        phone2: "Call Office",
        sms: "SMS",
        email: "Email",
      },
    ],
  };
  render() {
    return (
      <div className="App" style={styleApp}>
        <Header />
        <Employeepage employee={this.state.employee} />
      </div>
    );
  }
}
const styleApp = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItem: "center",
  width: "30%",
  backgroundColor: "#f4f4f4",
  margin: "30px 0 0 20px",
  padding: "0 10px",
};

export default App;
