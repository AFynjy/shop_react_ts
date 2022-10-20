import React, { useEffect, useState } from "react";
import { IProducts } from "../models";
import axios from "axios";

interface ProductProps {
  product: IProducts;
}

export function Products({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgColor = details ? "bg-yellow-400" : "bg-red-600";
  const btnClasses = ["border py-2 px-4", btnBgColor];

  return (
    <div className="border py-2 py-4 flex flex-col items-center">
      <img className="w-1/6" src={product.image} alt={product.title} />
      {product.title}
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails((prevState) => !prevState)}
      >
        {details ? "Hide details" : "Show details"}
      </button>
      {details && <p>{product.description}</p>}
    </div>
  );
}

export default Products
