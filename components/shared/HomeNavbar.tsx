import React from "react";
import { homeNavLinks } from "../../constants"; // Adjust the path as necessary
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeNavbar = () => {
  const filteredLinks = homeNavLinks.filter((link) => link.label !== "Main");
  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={30}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            SimplifyEfforts
          </span>
              </Link>
              

        <div className="md:flex md:order-2 hidden space-x-3 rtl:space-x-reverse">
          <Button
            variant="ghost"
            className="text-white border border-white rounded-full w-24 hover:border-black"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button variant="outline" className="rounded-full w-24">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
              </div>
              
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {filteredLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.route}
                  className="block py-2 px-3 text-gray-400 rounded  md:hover:bg-transparent md:hover:text-indigo-500 md:p-0"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
              </div>
              <div className="md:hidden">
                  
              </div>

      </div>
    </nav>
  );
};

export default HomeNavbar;
