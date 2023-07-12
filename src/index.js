import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import SuccessPayment from "./Pages/SuccessPayment";
import FailedPayment from "./Pages/FailedPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category/:catgoryId",
        element: <Category />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/payment/success",
        element: <SuccessPayment />,
      },
      {
        path: "/payment/failed",
        element: <FailedPayment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
