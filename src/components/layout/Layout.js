import { Children } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
