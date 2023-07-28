import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      Products
      <Link to={"/addProduct"}>Add Product</Link>
    </div>
  );
};

export default Products;
