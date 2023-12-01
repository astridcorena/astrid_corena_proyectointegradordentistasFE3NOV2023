import React from "react";
import logo from "../images/DH.png";
import face from "../images/ico-facebook.png";
import insta from "../images/ico-instagram.png";
import whats from "../images/ico-whatsapp.png";
import tiktok from "../images/ico-tiktok.png";
import { useContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { themeState } = useContextGlobal();
  return (
    <footer className={themeState.theme}>
      <img src={logo} alt="DH-logo" />
      <div className="social-icons">
        <img src={face} alt="Facebook" />
        <img src={insta} alt="Instagram" />
        <img src={whats} alt="Whatsapp" />
        <img src={tiktok} alt="TikTok" />
      </div>
    </footer>
  );
};

export default Footer;
