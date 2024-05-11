import React from "react";

import HomeNavbar from "@/components/shared/HomeNavbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HoverEffect } from "@/components/shared/CardHoverEffect";
import { projects, features } from "@/constants";
import Link from "next/link";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";

import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";

import { auth } from "@clerk/nextjs/server";
import { SignedIn } from "@clerk/nextjs";
import Checkout from "@/components/shared/Checkout";
const Home = () => {
  // const { userId } = auth();

  // if (!userId) redirect("");

  // const user = await getUserById(userId);
  return (
    <>
      <div className="w-full h-full bg-black">
        {/* Navbar */}
        <section id="navBar" className="">
          <HomeNavbar />
        </section>
        {/* Main Section */}
        <section
          id="main"
          className="flex flex-col justify-center items-center m-5 mb-10"
        >
          <div className="h-[40rem] w-full bg-black bg-grid-white/[0.2]  relative flex flex-col items-center justify-center">
            <div className="absolute h-[47rem] pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="flex flex-col items-center justify-center w-1/2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center relative bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400 py-8">
                Efficiency At Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                  Fingertips
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold relative  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                With SimplifyEfforts, efficiency becomes second nature, allowing
                you to focus on what truly matters in your business journey.
              </p>
            </div>
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <Button variant="outline" className="rounded-full">
                Getting Started
              </Button>
              <Button
                variant="ghost"
                className="text-white border border-white rounded-full hover:border-black"
              >
                Explore Demo
              </Button>
            </div>
          </div>
          <div className="z-0 mt-10">
            <Image
              src="/assets/images/dashboard.png"
              className="rounded-xl"
              alt="hero"
              height={720}
              width={1400}
            />
          </div>
        </section>
        {/* About Section */}
        <section id="about">
          <div className="max-w-5xl flex flex-col justify-center items-center mx-auto px-8">
            <div className="w-11/12 flex flex-col justify-center items-center relative mt-10">
              <Button
                variant="outline"
                className="rounded-full mb-10 font-bold"
              >
                About Us
              </Button>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                Who we are and why we are doing this
              </h1>
              <p className="text-lg sm:text-xl font-bold relative  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                Learn about our mission, our role in the tech landscape, and the
                values that drive us to innovate and empower businesses and
                life.
              </p>
            </div>
            <HoverEffect items={projects} />
          </div>
        </section>
        {/* Features Section */}
        <section id="features">
          <div className="py-16 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 md:px-12 ">
              <div className="w-11/12 flex flex-col justify-center items-center relative mt-10">
                <Button
                  variant="outline"
                  className="rounded-full mb-10 font-bold"
                >
                  Features
                </Button>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                  Diverse Features
                </h1>
                <p className="text-lg sm:text-xl font-bold relative  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                  Explore our diverse features tailored to meet the dynamic
                  needs of your life and modern businesses.
                </p>
              </div>
              <div className="mt-16 grid gap-4 rounded-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="relative group transition-transform duration-300 ease-in-out hover:scale-105 bg-zinc-900 rounded-lg  border border-zinc-700 hover:z-[1] hover:shadow-2xl hover:shadow-violet-600"
                  >
                    <div className="relative p-8 space-y-8">
                      <Image
                        src={feature.imageUrl}
                        className="w-10 p-1 rounded-md"
                        width={512}
                        height={512}
                        style={{ backgroundColor: feature.bgColor }}
                        alt={`Feature ${index + 1}`}
                      />
                      <div className="space-y-2">
                        <h5 className="text-xl text-zinc-100 font-bold tracking-wide transition group-hover:text-violet-600">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-zinc-400 tracking-wide leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <Link href="/sign-in" className="">
                        <Image
                          src="/assets/icons/link.svg"
                          className="w-10 p-1 bg-white rounded-full mt-5 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-45"
                          alt="link"
                          width={512}
                          height={512}
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section id="pricing">
          <div className="py-16 overflow-hidden">
            <div className="container m-auto px-6 space-y-8 md:px-12 ">
              <div className="w-11/12 flex flex-col justify-center items-center relative mt-10">
                <Button
                  variant="outline"
                  className="rounded-full mb-10 font-bold"
                >
                  Plans & Billing
                </Button>
                <h1 className=" p-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                  Our plans for your strategies
                </h1>
                <p className="text-lg sm:text-xl font-bold relative  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                  See below our main three plans for you and your startup and
                  agency. It start from here! You can teach yourself what you
                  really like.
                </p>
              </div>
              <ul className="credits-list flex justify-center gap-6">
                {plans.map((plan, index) => (
                  <li
                    key={plan.name}
                    className={`w-full rounded-xl border-2 border-purple-200/20 bg-zinc-900 p-8 shadow-xl shadow-purple-200/20 transition-transform duration-300 hover:scale-105 ${
                      index === 1 ? "lg:scale-110" : ""
                    }`}
                  >
                    <div className="flex-center flex-col gap-3">
                      <Image
                        src={plan.icon}
                        alt="check"
                        width={50}
                        height={50}
                      />
                      <p className="p-20-semibold mt-2 text-purple-500">
                        {plan.name}
                      </p>
                      <p className="h1-semibold text-white tracking-wide leading-relaxed">
                        ${plan.price}
                      </p>
                      <p className="p-16-regular text-white tracking-wide leading-relaxed">
                        {plan.credits} Credits
                      </p>
                    </div>
                    {/* Inclusions */}
                    <ul className="flex flex-col gap-5 py-9">
                      {plan.inclusions.map((inclusion) => (
                        <li
                          key={plan.name + inclusion.label}
                          className="flex items-center gap-4"
                        >
                          <Image
                            src={`/assets/icons/${
                              inclusion.isIncluded ? "check.svg" : "cross.svg"
                            }`}
                            alt="check"
                            width={24}
                            height={24}
                          />
                          <p className="p-16-regular text-zinc-400 tracking-wide leading-relaxed">
                            {inclusion.label}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <footer className="">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400 xl:text-2xl">
                  Subscribe our newsletter to get update.
                </h1>
                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />

                  <Button
                    variant="outline"
                    className="rounded-lg m-5 font-bold "
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div>
                <p className="font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                  Quick Link
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link href="#main">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed transition-colors duration-300 hover:underline hover:text-violet-500">
                      Home
                    </h2>
                  </Link>
                  <Link href="#about">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed0 transition-colors duration-300 hover:underline hover:text-violet-500">
                      About
                    </h2>
                  </Link>
                  <Link href="#pricing">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed transition-colors duration-300 hover:underline hover:text-violet-500">
                      Our Philosophy
                    </h2>
                  </Link>
                </div>
              </div>
              <div>
                <p className="font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
                  Industries
                </p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <Link href="/">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed transition-colors duration-300  hover:underline hover:text-violet-500">
                      Retail & E-Commerce
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed transition-colors duration-300 hover:underline hover:text-violet-500">
                      Innovation
                    </h2>
                  </Link>
                  <Link href="/">
                    <h2 className="text-zinc-400 tracking-wide leading-relaxed transition-colors duration-300 hover:underline hover:text-violet-500">
                      Transform
                    </h2>
                  </Link>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
            <div className="flex items-center justify-between">
              <Link href="/" className="flex space-x-3">
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
              <div className="flex -mx-2">
                <Link href="https://www.instagram.com/" passHref>
                  <div
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Image
                      src="/assets/icons/instagram.svg"
                      alt="Instagram"
                      width={40}
                      height={20}
                    />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/" passHref>
                  <div
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Image
                      src="/assets/icons/facebook.svg"
                      alt="Facebook"
                      width={40}
                      height={20}
                    />
                  </div>
                </Link>
                <Link href="https://twitter.com/" passHref>
                  <div
                    className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transform hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Image
                      src="/assets/icons/twitter.svg"
                      alt="Twitter"
                      width={40}
                      height={20}
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
