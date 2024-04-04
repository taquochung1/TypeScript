
import { useState,useEffect } from "react";
import './app.css'
import { Route, Routes } from "react-router-dom";
import productAdd from "./pages/admin/product-add";
import productEdit from "./pages/admin/product-edit";
import product from "./pages/admin/product";
import ProductDetailPage from "./pages/client/ProductDetailPage";
import ProductPage from "./pages/client/ProductPage";
import HomePage from "./pages/client/HomePage";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import Footer from "./components/Footer";
import Header from "./components/Header";
import dashboard from "./pages/admin/dashboard";
export function App() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const data = await getProducts();
  //     console.log(data);
  //     setProducts(data);
  //   })();
  // }, ['']);

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutUs/>} /> */}
          <Route path="products" element={<ProductPage />} />
          {/* <Route path="contact" element={<Contact/>} /> */}
          <Route path="products/:id" element={<ProductDetailPage />} />
        </Route>

        <Route path="admin" element={<LayoutAdmin />}>
          {/* <Route index element={<dashboard />} />
          <Route path="products" element={<product/>} />
          <Route path="products" element={<productAdd />} />
          <Route path="products/:id/edit" element={<productEdit />} /> */}
        </Route>

      </Routes>
    </>
  )
}
