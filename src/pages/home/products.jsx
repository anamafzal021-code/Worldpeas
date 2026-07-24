import veg1 from "../../assets/veg1.webp";
import veg2 from "../../assets/veg2.webp";
import veg3 from "../../assets/veg3.webp";
import { useState } from "react";

export default function Products() {
    const [quantity, setQuantity] = useState(1);

    const vegetables = [
        {
            id: 1,
            name: "Heirloom tomato",
            price: "$5.99",
            img: veg1,
            description: "Grown in San Juan Capistrano, CA",
        },
        {
            id: 2,
            name: "Organic Ginger",
            price: "$6.50",
            img: veg2,
            description: "Grown in San Juan Capistrano, CA",
        },
        {
            id: 3,
            name: "Sweet onion",
            price: "$14.95",
            img: veg3,
            description: "Grown in San Huntingon Beach, CA",
        },
    ];
    return (

        < div className="grid grid-cols-1 place-items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">
            {
                vegetables.map((item) => (
                    <div key={item.id} className="w-full flex flex-col max-w-[395px] min-h-[444px] rounded-3xl border-2 border-divider bg-back overflow-hidden hover:scale-[1.02] transform transition-all duration-300 ease-in-out">
                        <div className="flex flex-col shrink-0">
                            <img
                                className="object-cover rounded-t-3xl  overflow-hidden xl:w-[395px] h-full"
                                src={item.img}
                                alt={item.name}
                            ></img>
                        </div>
                        <div className="flex flex-col gap-2 lg:px-6 lg:py-6 md:px-4 md:py-4 px-3 py-5">
                            <h2 className="text-lg font-bold md:text-xl font-inter md:font-semibold leading-[130%] tracking-normal text-black z-10">
                                {item.name}
                            </h2>
                            <h3 className="text-base font-bold md:text-xl font-inter md:font-semibold leading-[130%] tracking-normal text-green">
                                {item.price} / lb
                            </h3>
                            <p className="font-inter font-normal text-lg tracking-[0%] leading-[150%] text-icon">{item.description}</p>
                        </div>
                    </div>

                ))
            }
        </div >
    );
}





