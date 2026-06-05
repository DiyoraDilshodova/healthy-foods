import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart";
import Like from "./pages/like";
import Home from "./pages/home";
import Layout from "./pages/layout";
import MainContextProvider from "./context/mainContext";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
          path: "/like",
          element: <Like />,
        },
      ],
    },
  ]);
   return (
    <MainContextProvider>
      <RouterProvider router={routes} />
    </MainContextProvider>
  );
}

export default App;
