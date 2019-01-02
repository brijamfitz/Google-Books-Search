import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ height: 50, clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;