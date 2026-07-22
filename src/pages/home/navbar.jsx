import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center w-full z-50 bg-transparent mt-8 relative">
      <div className="font-newsreader text-green tracking-[-0.01em] text-[32px] leading-[100%]">
        World Peas
      </div>
      <nav className="hidden lg:flex lg:gap-[52px] md:gap-8 text-black font-base font-inter tracking-normal leading-[130%] whitespace-nowrap items-center">
        <a
          href="#shop"
          className="hover:underline hover:text-green transition-all duration-100 text-center"
        >
          Shop
        </a>
        <a
          href="#newstand"
          className="hover:underline hover:text-green transition-all duration-100"
        >
          Newstand
        </a>
        <a
          href="#who-we-are"
          className="hover:underline hover:text-green transition-all duration-100"
        >
          Who we are
        </a>
        <a
          href="#my-profile"
          className="hover:underline hover:text-green transition-all duration-100"
        >
          My profile
        </a>
        <button className="bg-green text-white rounded-sm w-[126px] h-[48px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-green-900 hover:scale-105">
          Basket (3)
        </button>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-text-dark text-2xl focus:outline-none"
      >
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <nav className="bg-white lg:hidden absolute top-full left-0 w-full flex flex-col items-center justify-center gap-6 py-8 text-text-nav font-medium font-comfortaa shadow-xl border-t border-gray-100 z-40 animate-fadeIn">
          <a
            href="#shop"
            onClick={() => setIsOpen(false)}
            className="text-lg transition-all duration-100 hover:underline active:text-green-950"
          >
            Shop
          </a>
          <a
            href="#newstand"
            onClick={() => setIsOpen(false)}
            className="text-lg  transition-all duration-100 hover:underline active:text-green-900"
          >
            Newstand
          </a>
          <a
            href="#who-we-are"
            onClick={() => setIsOpen(false)}
            className="text-lg transition-all duration-100 hover:underline active:text-green-950-400"
          >
            Who we are
          </a>
          <a
            href="#profile"
            onClick={() => setIsOpen(false)}
            className="text-lg transition-all duration-100 hover:underline active:text-green-950-400"
          >
            My profile
          </a>
        </nav>
      )}
    </header>
  );
}
