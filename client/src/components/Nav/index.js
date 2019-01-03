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
  );
}

export default Nav;