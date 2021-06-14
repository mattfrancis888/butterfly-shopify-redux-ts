import React from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";
// import "../styles/shopify.css";
import "../css/main.css";
import ProductsPage from "./ProductsPage";
import Cart from "./shopify/Cart";
import Nav from "./Nav";
import { bootstrapShopify } from "../utils/utils";
import Input from "./shopify/Input";
import AutoComplete from "./shopify/AutoComplete";

export default function App() {
    // create the shopify client, initialize checkout, retrieve products, etc.
    bootstrapShopify();

    return (
        <div className="App">
            <Nav />

            <Input />
            <AutoComplete />
            {/* <Cart />
            <ProductsPage /> */}
        </div>
    );
}
