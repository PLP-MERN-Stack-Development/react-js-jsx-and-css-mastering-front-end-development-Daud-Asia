import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4 bg-gray-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;