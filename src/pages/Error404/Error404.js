import React from "react";
import { Link } from "react-router-dom";
import "./Error404.scss";

export function Error404() {
  return (
    <div className="error404">
      <h1>ERROR 404</h1>
      <h2>Página no encontrada</h2>
      <Link to="/">
        <h3>Volver al inicio</h3>
      </Link>
    </div>
  );
}
