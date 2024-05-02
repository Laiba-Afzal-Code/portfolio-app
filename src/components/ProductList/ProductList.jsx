import React from "react";
import "./productlist.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & Inspire it's Alba</h1>
        <p className="pl-desc">
          Alba is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio style & whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
