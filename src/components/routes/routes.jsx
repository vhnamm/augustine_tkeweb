import React from "react";
import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout/MainLayout";

import Home from "~/pages/Home/Home";
import SearchResult from "~/pages/SearchResult/SearchResult";
import Cart from "~/pages/Cart/Cart";


import Category from "../../pages/Category/Category";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import SpringCollection from "~/pages/SpringCollection/SpringCollection";
import SummerCollection from "~/pages/SummerCollection/SummerCollection";
import AdminOverview from "../../pages/AdminOverview/AdminOverview";
import WinterCollection from "~/pages/WinterCollection/WinterCollection";
import AutumnCollection from "~/pages/AutumnCollection/AutumnCollection";
import CategoryProducts from "../../pages/CategoryProducts/CategoryProducts";
import SubcategoryProducts from "../../pages/SubcategoryProducts/SubcategoryProducts";
import Checkout from "../../pages/Checkout/Checkout";
import Login from "~/pages/Login/Login";
import SignUpLayout from "~/pages/SignUp/SignUpLayout";
import Step1_Account from "~/pages/SignUp/SignUp_Step1";
import Step2_Name from "~/pages/SignUp/SignUp_Step2";
import Step3_Categories from "~/pages/SignUp/SignUp_Step3";
import Step4_Completed from "~/pages/SignUp/SignUp_Step4";
import OrderPlaced from "../../pages/OrderPlaced/OrderPlaced";   
import PayMent from "~/pages/PayMent/PayMent";     
import QrPayment from "~/pages/QrPayment/QrPayment";
export const routes = (
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="collection/spring-2025" element={<SpringCollection />} />
      <Route path="collection/summer-2025" element={<SummerCollection />} />
      <Route path="collection/winter-2025" element={<WinterCollection />} />
      <Route path="collection/autumn-2025" element={<AutumnCollection />} />



      <Route path="product/:slug" element={<ProductDetail />} />
      <Route path="search" element={<SearchResult />} />
      <Route path="category/:slug" element={<Category />}>
        <Route index element={<CategoryProducts />} />
        <Route path=":subcategorySlug" element={<SubcategoryProducts />} />
        <Route
          path=":subcategorySlug/:productType"
          element={<SubcategoryProducts />}
        />
      </Route>

      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order-placed" element={<OrderPlaced />} />
      <Route path="payment" element={<PayMent />} />
      <Route path="qr-payment" element={<QrPayment />} />
    </Route>

    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<SignUpLayout />}>

    <Route index element={<Navigate to="step_1" replace />} />
        <Route path="step_1" element={<Step1_Account />} />
        <Route path="step_2" element={<Step2_Name />} />
        <Route path="step_3" element={<Step3_Categories />} />
        <Route path="step_4" element={<Step4_Completed />} />
    </Route>
    <Route path="/dashboard" element={<AdminOverview />}></Route>
  </>
);
