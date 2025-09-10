import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout/MainLayout";
import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";
import Home from "~/pages/Home/Home";
import SearchResult from "~/pages/SearchResult/SearchResult";
import Explore from "~/pages/Explore/Explore";
import Products from "../../pages/Produtcs/Products";
import Collection from "~/pages/Collection/Collection";
import Category from "../../pages/Category/Category";
import Product from "../../pages/Product/Product";

export const routes = (
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="collection/:slug">
        <Route index element={<Collection/>}/>
        <Route path="products" element={<Products/>}/>
      </Route>

      <Route path="product/:slug" element={<Product/>}/>
      <Route path="search" element={<SearchResult/>} />

      <Route path="category/:slug" element={<Category/>}/>
    </Route>

    <Route path="/control/" element={<HeaderOnly />}></Route>
  </>
);
