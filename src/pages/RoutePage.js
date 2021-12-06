import React from "react";
import axios from "axios";

import "../styles/Route.css";

import searchBtn from "../img/searchButton.png";
import recentSearch from "../img/recentSearch.png";

const RoutePage = (props) => {
  const [출발지, set출발지] = React.useState("");
  const [도착지, set도착지] = React.useState("");
  const [경로검색결과, set경로검색결과] = React.useState();
  const [is검색, setIs검색] = React.useState(false);
  const [최근검색, set최근검색] = React.useState(true);
  const [전체, set전체] = React.useState(true);
  const [버스, set버스] = React.useState(false);
  const [지하철, set지하철] = React.useState(false);
  const [버스지하철, set버스지하철] = React.useState(false);
  const [최근검색목록, set최근검색목록] = React.useState([
    "포티드",
    "이마트 트레이더스",
    "월계역 2번 출구",
    "광운대학교",
    "번3동 주민센터",
  ]);
  const handleSearchOnClick = (e) => {
    if (출발지 === "" || 도착지 === "") {
    } else {
      axios
        .get(
          "https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX=126.9145430&EY=37.5499421&apiKey=UPu%2BWjCg6qf1ZRG9oyRKzw"
        )
        .then((res) => {
          console.log(res);
          set경로검색결과(res);
          setIs검색(true);
        })
        .catch((error) => {
          console.dir(error);
        });
    }
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
            <div
              className={최근검색 ? "routeInitBtnClicked" : "routeInitBtn"}
              onClick={(e) => {
                set최근검색(!최근검색);
              }}
            >
              최근검색
            </div>
            <div
              className={!최근검색 ? "routeInitBtnClicked" : "routeInitBtn"}
              onClick={(e) => {
                set최근검색(!최근검색);
              }}
            >
              즐겨찾기
            </div>
          </div>

          <div className="recentSearchList">
            {최근검색 ? (
              <div>
                {최근검색목록.map((item) => (
                  <div>
                    <div className="recentSearch">
                      <img
                        src={recentSearch}
                        width="14px"
                        height="14px"
                        alt="recentSearch"
                        className="recentSearchImg"
                      />
                      <div className="recentSearchItem">{item}</div>
                    </div>
                    <div className="hr2" />
                  </div>
                ))}
                <div className="deleteSearches">검색기록 삭제</div>
              </div>
            ) : (
              <div>즐겨찾기 목록</div>
            )}
          </div>
        </div>
      ) : (
        <div className="routeShowComponent">
          <div className="routeShowContainer">
            <div
              className={전체 ? "routeShowBtnClicked" : "routeShowBtn"}
              onClick={(e) => {
                set전체(true);
                set버스(false);
                set지하철(false);
                set버스지하철(false);
              }}
            >
              전체 {경로검색결과.data.result.path.length}
            </div>
            <div
              className={버스 ? "routeShowBtnClicked" : "routeShowBtn"}
              onClick={(e) => {
                set전체(false);
                set버스(true);
                set지하철(false);
                set버스지하철(false);
              }}
            >
              버스 {경로검색결과.data.result.busCount}
            </div>
            <div
              className={지하철 ? "routeShowBtnClicked" : "routeShowBtn"}
              onClick={(e) => {
                set전체(false);
                set버스(false);
                set지하철(true);
                set버스지하철(false);
              }}
            >
              지하철 {경로검색결과.data.result.subwayCount}
            </div>
            <div
              className={버스지하철 ? "routeShowBtnClicked" : "routeShowBtn"}
              onClick={(e) => {
                set전체(false);
                set버스(false);
                set지하철(false);
                set버스지하철(true);
              }}
            >
              버스+지하철 {경로검색결과.data.result.subwayBusCount}
            </div>
          </div>
          <div className="routeShowList">
            <div className="routeShowElementContainer">
              <div>1시간 5분</div>
              <div>버스 이미지 벼루말교 11465</div>
              <div>1017 1137 261</div>
              <div>버스 이미지 장위래미안아파트 08239</div>
              <div>172</div>
            </div>
            <div className="routeShowElementContainer">
              <div>1시간 5분</div>
              <div>버스 이미지 벼루말교 11465</div>
              <div>1017 1137 261</div>
              <div>버스 이미지 장위래미안아파트 08239</div>
              <div>172</div>
            </div>
            <div className="routeShowElementContainer">
              <div>1시간 5분</div>
              <div>버스 이미지 벼루말교 11465</div>
              <div>1017 1137 261</div>
              <div>버스 이미지 장위래미안아파트 08239</div>
              <div>172</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoutePage;
