import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Badge from "../Badge";
import { Container, MainBar, Menu, Aside } from "./styles";

const NavBar = () => {
  return (
    <Container>
      <div className="mainbarWrapper">
        <nav>
          <MainBar>
            <div>
              <button>
                <img
                  src="https://static.wanted.co.kr/images/icon-menu.png"
                  alt="hamberger menu"
                />
              </button>
              <Link to="/">wanted</Link>
            </div>
          </MainBar>
          <Menu>
            <li className="home">
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">채용</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li className="salary">
              <Link to="/">직군별 연봉</Link>
            </li>
            <li className="resume">
              <Link to="/">이력서</Link>
            </li>
            <li className="community">
              <Link to="/">
                커뮤니티
                <em>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="7"
                      fontWeight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        New
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </em>
              </Link>
            </li>
            <li className="freelancer">
              <Link to="/">프리랜서</Link>
            </li>
            <li className="prediction">
              <Link to="/">
                AI 합격예측
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="11"
                    viewBox="0 0 18 11"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      fontSize="7"
                      fontWeight="500"
                    >
                      <g fill="#36F">
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <g>
                                    <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                      <tspan x="0" y="8">
                                        Beta
                                      </tspan>
                                    </text>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </Link>
            </li>
          </Menu>
          <Aside>
            <li>
              <button>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
            </li>
            <li>
              <button>
                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
              </button>
              <Badge top={-5} left={15}></Badge>
            </li>
            <li className="profileBox">
              <button>
                <div className="avatarBorder">
                  <div className="avatarImage"></div>
                </div>
              </button>
              <Badge top={-1} left={28}></Badge>
            </li>
            <li className="dashboardButton">
              <a>기업 서비스</a>
            </li>
            <li className="additionalMenu">
              <button>
                <FontAwesomeIcon icon={faEllipsisH}></FontAwesomeIcon>
              </button>
            </li>
          </Aside>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
