import React from "react";
import "../styles/Route.css";

import searchBtn from "../img/searchButton.png";

const RoutePage = (props) => {
  return (
    <>
      <div className="SearchContainer">
        <div className="SearchInputContainer">
          <input type="text" />
          <div className="hr" />
          <input type="text" />
        </div>
        <img src={searchBtn} width="30px" height="30px" class="searchBtn" />
      </div>

      <div className="routeInitComponent">
        <div className="routeInitContainer">
          <div className="recentSearch">최근검색</div>
          <div className="bookMark">즐겨찾기</div>
        </div>

        <div className="recentSearchList"></div>
      </div>
    </>
  );
};

export default RoutePage;
