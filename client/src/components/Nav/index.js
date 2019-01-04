import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{ marginBottom: "20px" }}>
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <a className="navbar-brand" href="/savedbooks">
        Saved Books
      </a>
    </nav>

    // <ul className="nav nav-tabs" style={{ marginBottom: "40px" }}>
    //   <li className="nav-item">
    //     <a className="nav-link active" href="/">
    //       Google Books Search
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a className="nav-link" href="/savedbooks">
    //       Saved Books
    //     </a>
    //   </li>
    // </ul>
  );
};

export default Nav;
