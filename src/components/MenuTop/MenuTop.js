import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./MenuTop.scss";

export function MenuTop() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <Logo />
        </Link>
        <div className="menu-icon">X</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-movies">Lanzamientos</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/search">Buscador</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
