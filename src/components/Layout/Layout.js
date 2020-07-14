import React from "react";

const Layout = (props) => (
  <>
    <div>Toolbar, Sidedrawer, backdrop</div>
    <main>{props.children}</main>
  </>
);

export default Layout;
