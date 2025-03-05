import ProductContainer from "../components/ProductContainer";
import { useFetch } from "../hook/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product?limit=194");

  if (isPending) {
    return (
      <section className="main-container">
        <h1 className="text-3xl">Products</h1>
        <h2 className="text-xl">Loading...</h2>
      </section>
    );
  }

  return (
    <section>
      <div className="main-container">
        <h1 className="text-3xl mb-5">Products</h1>
        {products && <ProductContainer products={products} />}
      </div>
    </section>
  );
}

export default Home;
