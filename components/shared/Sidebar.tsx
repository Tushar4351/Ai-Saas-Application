"use client";

import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={40}
            height={40}
          />
          <h1 className="text-2xl font-bold text-purple-500">
            SimplifyEfforts
          </h1>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-violet-400 text-black"
                        : "text-white hover:text-black"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={34}
                        height={24}
                        style={{ backgroundColor: link.bgColor }}
                        className={`${
                          isActive ? "brightness-200" : ""
                        } rounded-md p-1 `}
                      />
                      <h2 className="text-lg">{link.label}</h2>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-white hover:text-black"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={34}
                        height={24}
                        style={{ backgroundColor: link.bgColor }}
                        className={`${
                          isActive ? "brightness-200" : ""
                        } rounded-md p-1`}
                      />
                      <h2 className="text-lg">{link.label}</h2>
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4 ">
                
                  <UserButton afterSignOutUrl="/" showName />
               
              </li>
            </ul>
          </SignedIn>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
