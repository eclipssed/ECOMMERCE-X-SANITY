"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Crafty_Girls } from "next/font/google";
import { GiLovers } from "react-icons/gi";
import { FaBars, FaXmark } from "react-icons/fa6";

const craftyGirls = Crafty_Girls({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400"],
});

const links = [
  { title: "Home", href: "/" },
  { title: "Blog", href: "/blog" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="z-30 bg-transparent  fixed top-0 left-0 right-0 w-full">
      <nav
        className={` py-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0  border-b bg-gradient bg-green-50  duration-300"
            : "bg-lightGray"
        }`}
      >
        <div className="flex wrapper justify-between items-center p-4 ">
          <Link className={`${craftyGirls.className} flex`} href={"/"}>
            {" "}
            <span>
              <GiLovers className="text-2xl text-green-500" />
            </span>
            <span className="text-2xl font-bold text-pink-500">Mama</span>
            <span className="text-2xl font-bold text-green-500">Magic</span>
            <span className="text-2xl font-bold text-pink-500">Hub</span>
          </Link>
          <ul className="md:flex hidden gap-8 items-center ">
            {links.map((link, index) => (
              <li className="hover:text-pink-500 text-xl" key={index}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden ">
            <div onClick={toggleMenu} className=" text-pink-500 ">
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 " />
              ) : (
                <FaBars className="w-6 h-6 " />
              )}
            </div>
          </div>
        </div>
        {/* nav items for mobile devices */}
        <ul
          className={`space-y-4 text-center px-4  mt-20 py-7 bg-green-50  
           ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}
          
          `}
        >
          {links.map((link, index) => (
            <li
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-pink-500  text-xl"
              key={index}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
