import React from "react";
import axios from "axios";

import "../styles/Route.css";

import searchBtn from "../img/searchButton.png";

const RoutePage = (props) => {
  const [출발지, set출발지] = React.useState("");
  const [도착지, set도착지] = React.useState("");
  const [경로검색결과, set경로검색결과] = React.useState();
  const [is검색, setIs검색] = React.useState(false);

  const handleSearchOnClick = (e) => {
    setIs검색(true);
    axios
      .get(
        "https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=UPu%2BWjCg6qf1ZRG9oyRKzw"
      )
      .then((res) => {
        set경로검색결과(res);
        console.log(경로검색결과);
      })
      .catch((error) => {
        console.dir(error);
      });
  };

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
      {!is검색 ? (
        <div className="routeInitComponent">
          <div className="routeInitContainer">
            <div className="recentSearch">최근검색</div>
            <div className="bookMark">즐겨찾기</div>
          </div>

          <div className="recentSearchList"></div>
        </div>
      ) : (
        <div className="routeShowComponent">
          <div className="routeShowContainer">
            <div className="routeShowBtn">전체</div>
            <div className="routeShowBtn">버스</div>
            <div className="routeShowBtn">지하철</div>
            <div className="routeShowBtn">버스+지하철</div>
          </div>
          <div className="routeShowList"></div>
        </div>
      )}
    </>
  );
};

export default RoutePage;
