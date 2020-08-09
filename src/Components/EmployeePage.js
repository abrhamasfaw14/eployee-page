import React from "react";
import employeelist from "./EmployeeList";
import EmployeeList from "./EmployeeList";
function EmployeePage(props) {
  return (
    <div>
      {props.employee.map((employee) => (
        <EmployeeList employee={employee} />
      ))}
    </div>
  );
}
export default EmployeePage;
