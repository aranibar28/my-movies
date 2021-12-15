import React from "react";
import { Spin } from "antd";
import "./Loading.scss";

export function Loading() {
  return (
    <div>
      <div className="loading">
        <Spin size="large" />
        <h5>Cargando...</h5>
      </div>
    </div>
  );
}
