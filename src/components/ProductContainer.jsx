import Product from "./Product";

function ProductContainer({ products: { products } }) {
  console.log(products);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((p) => {
        return <Product product={p} key={p.id} />;
      })}
    </div>
  );
}

export default ProductContainer;
