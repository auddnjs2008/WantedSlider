import React from "react";
import { Link } from "react-router-dom";
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
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/">채용</Link>
            </li>
            <li>
              <Link to="/">이벤트</Link>
            </li>
            <li>
              <Link to="/">직군별 연봉</Link>
            </li>
            <li>
              <Link to="/">이력서</Link>
            </li>
            <li>
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
                      fill-rule="evenodd"
                      font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      font-size="9"
                      font-weight="500"
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
            <li>
              <Link to="/">프리랜서</Link>
            </li>
            <li>
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
                      fill-rule="evenodd"
                      font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                      font-size="9"
                      font-weight="500"
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
              <button></button>
            </li>
            <li>알림모양</li>
            <li>프로필 모양</li>
            <li>기업 서비스</li>
            <li>추가 메뉴</li>
          </Aside>
        </nav>
      </div>
    </Container>
  );
};

export default NavBar;
