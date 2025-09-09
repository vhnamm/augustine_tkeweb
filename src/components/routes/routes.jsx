import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout/MainLayout";
import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";
import Home from "~/pages/Home/Home";

import Explore from "~/pages/Explore/Explore";

import CollectionProduct from "~/pages/CollectionProduct/CollectionProduct";

export const routes = (
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="collections/" element={<CollectionProduct />}>
        <Route index element={<CollectionProduct />} />
        <Route path=":category" element={<CollectionProduct />} />
      </Route>

      <Route path="explore" element={<Explore />} />
    </Route>

    <Route path="/control/" element={<HeaderOnly />}></Route>
  </>
);
