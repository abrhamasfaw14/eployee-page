import React from "react";
import person from "./person-one.jpeg";
import "./employeeListitem.css";
function EmployeeList(props) {
  return (
    <div>
      <div styleName="container" style={styleEmployeelistitem}>
        <div>
          {""}
          <img
            style={styleEmployeelistimage}
            src={props.employee.photo}
            alt="person Image"
          />
        </div>
        <div>
          <p>{props.employee.name}</p>
          <p>{props.employee.position}</p>
        </div>
      </div>
      <div style={styleinput}>
        <p className="para-one">{props.employee.phone1}</p>
        <input type="number" placeholder=" 781-000-002"></input>
      </div>
      <div style={styleinput}>
        <p className="para-two">{props.employee.phone2}</p>
        <input type="number" placeholder=" 017-000-002"></input>
      </div>
      <div style={styleinput}>
        <p className="para-three">{props.employee.sms}</p>
        <input type="text" placeholder=" 017-000-004"></input>
      </div>
      <div style={styleinput}>
        <p className="para-two" style={styleEmployeelistitem}>
          {props.employee.email}
        </p>
        <input type="email" placeholder=" abe@gmail.com"></input>
      </div>
    </div>
  );
}

const styleEmployeelistimage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 0 0 10px",
  justifyContent: "flex-start",
};

const styleEmployeelistitem = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "100%",
  padding: "10px 0",
  height: "50px",
  margin: "10px 0",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
};

const stylecontent = {
  margin: "0 20px",
};

const stylep = {
  padding: "0",
  margin: "0",
  borderstyle: "solid",
  borderwidth: "1px",
};
const styleinput = {
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "100%",
  padding: "10px 0",
  height: "50px",
  margin: "0 0",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
};

export default EmployeeList;
