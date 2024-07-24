"use client";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      Layout
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
