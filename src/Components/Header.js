import React from "react";
function Header() {
  return (
    <div>
      <input style={styleHeader} type="text" placeholder="Employee"></input>
    </div>
  );
}
const styleHeader = {
  height: "30px",
  borderRadius: "5px",
  padding: "5px 2.5px",
  width: "95%",
  border: "2px solid blue",
};
export default Header;
