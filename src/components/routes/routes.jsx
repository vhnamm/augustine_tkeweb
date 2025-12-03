import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout/MainLayout";

import Home from "~/pages/Home/Home";
import SearchResult from "~/pages/SearchResult/SearchResult";

import Collection from "~/pages/Collection/Collection";
import Category from "../../pages/Category/Category";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import SpringCollection from "~/pages/SpringCollection/SpringCollection";
import SummerCollection from "~/pages/SummerCollection/SummerCollection";
import AdminOverview from "../../pages/AdminOverview/AdminOverview";
import WinterCollection from "~/pages/WinterCollection/WinterCollection";
import AutumnCollection from "~/pages/AutumnCollection/AutumnCollection";

export const routes = (
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="collection/spring-2025" element={<SpringCollection />} />
      <Route path="collection/summer-2025" element={<SummerCollection />} />
      <Route path="collection/winter-2025" element={<WinterCollection />} />
      <Route path="collection/autumn-2025" element={<AutumnCollection />} />

      <Route path="collection/:slug">
        <Route index element={<Collection/>}/>
        
      </Route>

      <Route path="product/:slug" element={<ProductDetail/>}/>
      <Route path="search" element={<SearchResult/>} />

      <Route path="category/:slug" element={<Category/>}/>
    </Route>

    <Route path="/dashboard" element={<AdminOverview />}></Route>
  </>
);
