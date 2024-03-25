"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Crafty_Girls } from "next/font/google";
import { GiLovers } from "react-icons/gi";
import { FaBars, FaXmark } from "react-icons/fa6";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "@/context/StateContext";

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
  const { showCart, setShowCart, totalQuantities } = useStateContext();

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
    <header className="wrapper bg-transparent w-full">
      <nav className="py-6">
        <div className="flex justify-between items-center ">
          <p className="logo">
            <Link href="/">Eclipssed Headphones</Link>
          </p>

          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>

          {showCart && <Cart />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
