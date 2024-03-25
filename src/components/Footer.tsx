import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Eclipssed Headphones All rights reserverd</p>
      <p className="icons">
        <Link href="/">
          <AiFillInstagram />
        </Link>
        <Link href="/">
          <AiOutlineTwitter />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
