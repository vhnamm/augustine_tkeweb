import React from "react";
import { Route } from "react-router-dom";
import MainLayout from "~/layouts/MainLayout/MainLayout";
import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";
import Home from "~/pages/Home/Home";

import Explore from "~/pages/Explore/Explore";

import Collection from "~/pages/Collection/Collection";

export const routes = (
  <>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="collection/:slug" element={<Collection />} />
    </Route>

    <Route path="/control/" element={<HeaderOnly />}></Route>
  </>
);
