import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "skyblue" }}
      className="jumbotron"
    >
      <img src="./react-logo.png" alt="react-logo" style={{ height: "200px" }} />
      <img src="./google-logo.png" alt="google-logo" style={{ height: "200px" }} />
      <img src="./book-icon.png" alt="book-icon" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;