
import React from "react";
import { useState } from "react";

export default function Produce() {
    return (
        <div className="mt-20">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                {/* Left Side: Title & Date */}
                <div className="flex flex-col lg:flex-row md:flex-row gap-4 md:gap-6 items-baseline">
                    <h1 className="text-4xl lg:text-[64px] font-newsreader tracking-tight leading-tight text-black md:text-5xl">
                        Produce
                    </h1>
                    <p className="font-inter text-lg md:text-xl text-black whitespace-nowrap">
                        <span className="font-medium">Fresh </span>
                        <span className="font-light">— August 21, 2023</span>
                    </p>
                </div>

                {/* Right Side: Chips / Filter Buttons */}
                <div className="flex items-center gap-2">
                    {/* Active / Default Chip */}
                    <button className="rounded-full px-4 py-2 bg-[#426B1F] text-white font-inter font-semibold text-sm cursor-pointer">
                        Default
                    </button>

                    {/* Outline Chips */}
                    <button className="rounded-full px-4 py-2 bg-white text-black font-inter font-semibold text-sm border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                        A-Z
                    </button>

                    <button className="rounded-full px-4 py-2 bg-white text-black font-inter font-semibold text-sm border border-gray-300 hover:bg-gray-50 transition-colors cursor-pointer">
                        List view
                    </button>
                </div>
            </div>

            <hr className="border-t border-gray-200 w-full mt-5" />
        </div>
    );
}