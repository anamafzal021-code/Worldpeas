import React from "react";
import Produce from "./produce";
import Navbar from "./navbar";
import Products from "./products";
export default function ProductPage() {
    return (
        <div>
            <div>
                <Produce />
            </div>
            <div>
                <Products />
            </div>

        </div>
    )
}