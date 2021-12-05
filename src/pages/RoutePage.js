import React from "react";
import axios from "axios";

import "../styles/Route.css";

import searchBtn from "../img/searchButton.png";

const handleSearchOnClick = (e) => {
  axios
    .get(
      "https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=UPu%2BWjCg6qf1ZRG9oyRKzw"
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.dir(error);
    });
};

const RoutePage = (props) => {
  const [출발지, set출발지] = React.useState("");
  const [도착지, set도착지] = React.useState("");

  return (
    <>
      <div className="SearchContainer">
        <div className="SearchInputContainer">
          <input
            type="text"
            placeholder="출발지"
            onChange={(e) => {
              set출발지(e.target.value);
            }}
          />
          <div className="hr" />
          <input
            type="text"
            placeholder="도착지"
            onChange={(e) => {
              set도착지(e.target.value);
            }}
          />
        </div>
        <img
          src={searchBtn}
          width="30px"
          height="30px"
          className="searchBtn"
          alt="searchButton"
          onClick={handleSearchOnClick}
        />
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
