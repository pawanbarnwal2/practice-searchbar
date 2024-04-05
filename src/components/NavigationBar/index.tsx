import React from "react";
import "./header.css";
import { CardTravel, PregnantWoman, SearchOutlined } from "@mui/icons-material";

function NavigationBar() {
  return (
    <header className="header-container">
      <div>LOGO</div>
      <div className="search-box">
        <input type="text" placeholder="search items" />
        <div className="icon-box">
          <SearchOutlined className="icon" />
        </div>
      </div>
      <div className="menu-items">
        <CardTravel />
        <PregnantWoman />
      </div>
    </header>
  );
}

export default NavigationBar;
