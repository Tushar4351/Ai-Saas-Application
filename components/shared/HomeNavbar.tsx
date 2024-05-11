"use client";
import React, { useState } from "react";
import { homeNavLinks } from "../../constants";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeNavbar = () => {
  const filteredLinks = homeNavLinks.filter((link) => link.label !== "Main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenuClicked(true);
  };

  return (
    <nav
      className={`home-nav fixed w-full z-20 top-0 start-0 ${
        isMenuOpen ? "bg-white " : "bg-black"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={30}
          />
          <span
            className={`self-center text-xl font-semibold whitespace-nowrap ${
              isMenuOpen ? "text-black" : "text-white"
            }`}
          >
            SimplifyEfforts
          </span>
        </Link>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "flex flex-col items-center text-black" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8  md:flex-row md:mt-0">
            {filteredLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.route}
                  className={`block py-2 px-3  rounded hover:bg-transparent hover:text-indigo-500 md:p-0 ${
                    isMenuOpen ? "text-black" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`md:flex md:order-2 space-x-3 ${
            isMenuOpen
              ? "flex flex-row justify-center items-center text-black w-full"
              : "hidden"
          } justify-center items-center`} // Added justify-center items-center
        >
          <Button
            variant="ghost"
            className={`border rounded-full w-24 ${
              isMenuOpen
                ? "text-black border-black"
                : "text-white border-white hover:border-black"
            }`}
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button
            variant="outline"
            className={`border rounded-full w-24 ${
              isMenuOpen
                ? "text-white bg-black"
                : "text-black border-white hover:border-black"
            }`}
          >
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
        <div className="md:hidden order-1">
          <button
            className={`${
              isMenuOpen ? "bg-black" : "bg-white"
            } p-2 rounded-full absolute top-3 right-2 menu-button ${
              isMenuClicked ? "top-0" : "top-3"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <Image
                src="/assets/icons/homecross.svg"
                alt="close"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/assets/icons/homemenu.svg"
                alt="menu"
                width={24}
                height={24}
                className=""
              />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
