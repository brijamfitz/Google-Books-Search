import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ height: 50, clear: "both", paddingBottom: "60px", paddingTop: "10px", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;