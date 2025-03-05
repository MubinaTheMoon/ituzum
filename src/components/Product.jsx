import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../hook/useGlobalContext";
import { toast } from "react-toastify";

function Product({ product }) {
  const { dispatch, products } = useGlobalContext();
  const addProduct = (e, product) => {
    e.preventDefault();

    const item = products.some((p) => p.id == product.id);

    if (item) {
      toast.warn("Already Added");
      return;
    }
    toast.success("Successfully Added");

    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  };

  return (
    <Link
      className="group card bg-base-300 shadow-sm mb-10"
      to={`/product/${product.id}`}
    >
      <figure>
        <img
          className="group-hover:scale-[1.1] transition duration-300"
          width={200}
          src={product.thumbnail}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={(e) => addProduct(e, product)}
            className="btn btn-secondary btn-sm md:btn-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
