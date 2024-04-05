import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavigationBar />
      <div style={{ margin: "0 auto", maxWidth: "1386px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
