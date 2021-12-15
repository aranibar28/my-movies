import React from "react";
import { Layout } from "antd";
import "./Footer.scss";

export function Footer() {
  const { Footer } = Layout;

  return (
    <Footer className="footer">
      <p>Todos los derechos reservados - 2021.</p>
    </Footer>
  );
}
