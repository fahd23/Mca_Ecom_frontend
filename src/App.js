import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from "./layout/Layout";
import Loader from "./utils/Loader";
import {
  Cart,
  Category,
  ErrorPage,
  FailedPayment,
  Home,
  Product,
  SuccessPayment,
} from "./routes/route";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/category/:catgoryId" element={<Category />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/payment/success" element={<SuccessPayment />} />
            <Route path="/payment/failed" element={<FailedPayment />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
