import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <li>
          <Link to="/">Counter</Link>
        </li>
        <li>
          <Link to="/name">Name Changing</Link>
        </li>
        <li>
          <Link to="/todo">Todo</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
