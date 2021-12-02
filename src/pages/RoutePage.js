import React from "react";
import "../styles/Route.css";

import searchBtn from "../img/searchButton.png";

const RoutePage = (props) => {
  return (
    <>
      <div className="SearchContainer">
        <div className="SearchInputContainer">
          <input type="text" maxlength="13" />
          <div className="hr" />
          <input type="text" maxlength="13" />
        </div>
        <div id="searchBtn">
          <img src={searchBtn} width="50px" class="searchBtn" />
        </div>
      </div>
    </>
  );
};

export default RoutePage;
