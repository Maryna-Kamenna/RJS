import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <Container fluid style={{ backgroundColor: "#212529", color: "#fff" }}>
    <Container
      style={{ display: " flex", justifyContent: "center", padding: "10px" }}
    >
      <p> By Marina. This is footer BABY</p>
    </Container>
  </Container>
);

export default Footer;