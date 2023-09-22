import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import LogoImage from "../../images/logo.png";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer-area">
      <Container>
        <Logo image={LogoImage} />
        <p>© 2023 Spotographer, All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
