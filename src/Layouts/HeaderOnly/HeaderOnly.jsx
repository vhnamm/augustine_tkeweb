import React from "react";
import { Outlet } from "react-router";

const HeaderOnly = () => {
  return (
    <>
      <div>Headder Only</div>
      <Outlet />
    </>
  );
};

export default HeaderOnly;
