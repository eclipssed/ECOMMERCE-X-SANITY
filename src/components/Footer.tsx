import { Crafty_Girls } from "next/font/google";
import Link from "next/link";
import React from "react";
import { GiLovers } from "react-icons/gi";

const craftyGirls = Crafty_Girls({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="bg-green-400 text-white w-full  mt-36">
      <div className="wrapper flex justify-between items-center p-4 gap-4 flex-wrap ">
        <Link className={`${craftyGirls.className} flex`} href={"/"}>
          {" "}
          <span>
            <GiLovers className="text-2xl text-green-500" />
          </span>
          <span className="text-2xl font-bold text-pink-500">Mama</span>
          <span className="text-2xl font-bold text-green-500">Magic</span>
          <span className="text-2xl font-bold text-pink-500">Hub</span>
        </Link>
        <p className="">
          © 2024 Copyright, All Right Reserved Made by MamaMagicHub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
