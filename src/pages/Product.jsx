import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product/" + id);

  if (isPending) {
    return (
      <section>
        <div className="main-container">
          <h1 className="text-3xl">Products</h1>
          <h2 className="text-xl">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <>
      {product && (
        <section>
          <div className="main-container flex items-center gap-20">
            <div>
              <img src={product.thumbnail} alt="" />
              <h2 className="text-3xl">{product.title}</h2>
            </div>
            <div w-200>
              <p>{product.description}</p>
              <b>Price: {product.price}</b>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Product;
