import React from "react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <Link className="navbar-brand text-white text-center ms-4" to="/">
            ADMIN PANLE
        </Link>
        <Link className="navbar-brand text-white text-center ms-4" to="/posts">
            POSTS
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
