import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
