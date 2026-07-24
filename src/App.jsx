import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // Router tags import kiye

import Navbar from "./pages/home/navbar";
import Basket from "./pages/home/basket";
import Vegs from "./pages/home/vegs";
import Summary from "./pages/home/summary";
import HomePage from "./pages/home/homepage";

import veg1 from "./assets/veg1.webp";
import veg2 from "./assets/veg2.webp";
import veg3 from "./assets/veg3.webp";
import ProductPage from "./pages/home/productpage";
import { Link } from "react-router-dom";

export default function App() {
  const [quantity, setQuantity] = useState(1);

  const vegetables = [
    {
      id: 1,
      name: "Heirloom tomato",
      price: "$5.99",
      pricePerLB: "$5.99 / lb",
      img: veg1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Organic Ginger",
      price: "$6.50",
      pricePerLB: "$12.99 / lb",
      img: veg2,
      quantity: 0.5,
    },
    {
      id: 3,
      name: "Sweet onion",
      price: "$14.95",
      pricePerLB: "$2.99 / lb",
      img: veg3,
      quantity: 5,
    },
  ];

  return (
    /* 🌍 Global Container:  */
    <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 min-h-screen flex flex-col">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/checkout"
          element={
            <main className="flex-1">
              <Basket />
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-center items-start mt-10">
                <div className="lg:col-span-2 flex flex-col gap-5 max-w-[821px] w-full">
                  {vegetables.map((veg) => (
                    <Vegs
                      key={veg.id}
                      image={veg.img}
                      name={veg.name}
                      price={veg.price}
                      pricePerLB={veg.pricePerLB}
                      quantity={veg.quantity}
                    />
                  ))}
                </div>
                <div className="lg:col-span-1">
                  <Summary />
                </div>
              </div>
            </main>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

    </div >



  );
}