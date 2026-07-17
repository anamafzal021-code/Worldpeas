import React from "react";
import ArrowIcon from "./arrowicon";

export default function Summary() {
  return (
    <div className="max-w-[395px] max-h-[318px] border-2 border-divider rounded-3xl px-6 py-6 bg-back w-full">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-xl text-black font-semibold font-inter tacking-[0%] leading-[130%]">
            Order summary
          </h1>
        </div>

        <div className="flex justify-between">
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black mt-2.5">
            Subtotal
          </h3>
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black">
            $27.44
          </h3>
        </div>

        <div className="flex justify-between">
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black">
            Shipping
          </h3>
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black">
            $3.99
          </h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black">
            Tax
          </h3>
          <h3 className="text-lg font-normal font-inter tacking-[0%] leading-[130%] text-black">
            $2.00
          </h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold font-inter tacking-[0%] leading-[130%] text-black">
            Total
          </h3>
          <h3 className="text-lg font-semibold font-inter tacking-[0%] leading-[130%] text-black">
            $33.43
          </h3>
        </div>
        <div>
          <button className="w-full bg-green text-white text-lg font-semibold font-inter tacking-[0%] leading-[130%] w-full h-12 rounded-lg flex justify-between items-center px-4 mt-5 max-w-[347px]">
            Continue to payment
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
