import React from "react";

export default function Basket() {
  return (
    <div className="mt-20.5">
      {" "}
      <div className="flex gap-8 items-end">
        <h1 className="text-4xl lg:text-[64px] font-newsreader tracking-[-0.02%] leading-[120%] text-black md:text-5xl">
          Basket
        </h1>
        <span className="font-inter text-xl tracking-normal text-gray-500 pb-3 whitespace-nowrap font-light leading-[130%]">
          3 items
        </span>
      </div>
      <hr className="border-t border-divider w-full mt-5" />
    </div>
  );
}
