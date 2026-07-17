import React from "react";
import veg1 from "../../assets/veg1.png";
import icon from "../../assets/icon.svg";
export default function Vegs({ image, name, price, quantity, pricePerLB }) {
  return (
    <div className="w-full grid grid-cols-[2.8fr_1fr] max-w-[821px] min-h-[159px] rounded-3xl border-2 border-divider bg-back  overflow-hidden">
      <div className="flex flex-row shrink-0 ">
        <img
          className="object-cover rounded-l-3xl  overflow-hidden w-[160px] h-full"
          src={image}
          alt={name}
        ></img>
        <div className="flex flex-col gap-2 lg:px-6 lg:py-6 md:px-4 md:py-4 px-3 py-5">
          <h2 className="text-lg font-bold md:text-xl font-inter md:font-semibold leading-[130%] tracking-normal text-black z-10">
            {name}
          </h2>
          <h3 className="text-base font-bold md:text-xl font-inter md:font-semibold leading-[130%] tracking-normal text-green">
            {pricePerLB}
          </h3>
          <div className="flex lg:px-5 bg-white rounded-3xl border-black/6 items-center justify-between   border-2 md:px-3 px-2 max-w-[128px] h-[40px] md:h-[48px]">
            <h3 className="font-inter text-black leading-[130%] tracking-normal font-semibold text-base">
              {quantity} lb
            </h3>
            <svg
              className="w-8 h-8 text-gray-400 group-hover:text-green transition-colors"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7728 9.14861C21.1633 8.75808 21.7965 8.75808 22.187 9.14861L23.6012 10.5628C23.9918 10.9533 23.9918 11.5865 23.6012 11.977L22.187 13.3913L19.3586 10.5629L18.6515 11.27L21.4799 14.0984L13.2087 22.3695L9.67319 23.0766L10.3803 19.5411L20.7728 9.14861ZM9.46073 24.1389L13.7017 23.2907L24.3083 12.6841C25.0894 11.9031 25.0894 10.6368 24.3083 9.85571L22.8941 8.4415C22.1131 7.66045 20.8467 7.66045 20.0657 8.4415L9.4591 19.0481L8.6109 23.2891L8.39844 24.3514L9.46073 24.1389Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
      <h3 className="flex justify-end font-inter font-semibold text-xl text-black tracking-normal leading-normal md:p-6 px-2 py-2 ">
        {price}
      </h3>
    </div>
  );
}
