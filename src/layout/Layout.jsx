import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../utils/Loader";

const Layout = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
