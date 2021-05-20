import React from "react";
import HeaderHome from "../../HomeComponents/HeaderHome";
import Footer from "../Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderHome principal={false} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
