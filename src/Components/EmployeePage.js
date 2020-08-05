import React from "react";
import person from "./person-one.jpeg";
function EmployeePage(){
    return(
        <div>
        <div styleName="container" style={styleEmployeelistitem}>
            <div>
                {""}
                <img style={styleEmployeelistimage} src={person} alt="person Image"/>
            </div >
            <div style={stylecontent}>
                <p style={stylep}>Julie Talor</p>
                <p style={stylep}>VP  of Markating</p>
            </div>
        </div>
    </div>
  )
}
const styleEmployeelistimage = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  margin: "0 0 0 10px",
};

const styleEmployeelistitem = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  width: "50%",
  padding: "10px 0",
  height: "50px",
  margin: "10px 0",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.25)",
  borderRadius: "7px",
};

const stylecontent = {
  margin: "0 20px",
};

const stylep= {
  padding: "0",
  margin: "0",
};
   
export default EmployeePage;