import React from "react";

import HomeNavbar from "@/components/shared/HomeNavbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HoverEffect } from "@/components/shared/CardHoverEffect";
const Home = () => {
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
        <section id="about" className="">
          <div className="max-w-5xl flex flex-col justify-center items-center mx-auto px-8">
            <div className="w-11/12 flex flex-col justify-center items-center relative mt-10">
              <Button variant="outline" className="rounded-full mb-10 font-bold">
                About Us
              </Button>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-400">
              Who we are and why we are doing this
              </h1>
              <p className="text-lg sm:text-xl font-bold relative  text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
              Learn about our mission, our role in the tech landscape, and the values that drive us to innovate and empower businesses and life.
              </p>
            </div>
            <HoverEffect items={projects} />
          </div>
        </section>
        {/* Features Section */}
        <section id="features">
          <h1>Features</h1>
          <p>This section describes the features of our product...</p>
        </section>
        {/* Pricing Section */}
        <section id="pricing">
          <h1>Pricing</h1>
          <p>This section provides pricing information...</p>
        </section>
        2{/* Contact Section */}
        <section id="contact">
          <h1>Contact Us</h1>
          <p>This section contains contact information...</p>
        </section>
      </div>
    </>
  );
};

export default Home;

export const projects = [
  {
    title: "Our Mission",
    description:
      "Whether it's simplifying complex workflows, fostering collaboration, or driving technological advancements, we are dedicated to empowering businesses to thrive in the digital age.",
  },
  {
    title: "Our Role",
    description:
      "Our role extends beyond being a service provider — we are your strategic partner in navigating the challenges and opportunities of the digital landscape.",
  },
  {
    title: "Our Values",
    description:
      "We believe in pushing the boundaries of what's possible. Innovation is at the core of everything we do, driving us to create solutions that anticipate and meet the needs of tomorrow.",
  },
 
];
