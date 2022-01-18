import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  background-color: white;
  .mainbarWrapper {
    position: relative;
    max-width: 1060px;

    @media (max-width: 767px) {
      margin: 0 auto;
      height: 110px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
      height: 110px;
      width: 90%;
      margin: 0 auto;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      margin: 0 auto;
      height: 50px;
      width: 90%;
    }

    @media (min-width: 1200px) {
      margin: 0 auto;
      height: 50px;
      width: 87.72%;
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
`;

export const MainBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 17px;
  font-weight: 600;
  color: #333333;
  button {
    all: unset;
    margin-top: -2px;
    margin-right: 15px;
    img {
      all: unset;
      width: 17px;
      height: 14px;
      object-fit: contain;
    }
  }
  @media (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 15px 20px;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 60px;
    width: 100%;
    padding: 15px 0;
  }
`;

export const Menu = styled.ul`
  display: flex;
  text-align: center;
  height: inherit;

  li {
    display: inline-block;
    height: inherit;
    a {
      position: relative;
      vertical-align: middle;
      display: inline-block;
      font-size: 12px;
      line-height: 20px;
      font-weight: 600;
      padding: 15px;
    }
  }

  li:hover {
    box-shadow: inset 0 -1px 0 0 rgb(0 0 0 / 12%);
  }

  li.home {
    @media (max-width: 768px) {
      a {
        padding-left: 20px;
      }
    }
    @media (min-width: 768px) and (max-width: 991px) {
      display: none;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      display: none;
    }
    @media (min-width: 1200px) {
      display: none;
    }
  }

  .salary,
  .resume,
  .community,
  .freelancer,
  .prediction {
    @media (max-width: 768px) {
      display: none;
    }
  }

  li.community {
    a {
      em {
        position: absolute;
        top: 9px;
        right: -3px;
        pointer-events: none;
        font-style: none;
      }
    }
  }
  li.prediction {
    a {
      span {
        position: absolute;
        top: 10px;
        right: -4px;
        pointer-events: none;
      }
    }
  }
  @media (max-width: 320px) {
    li {
      a {
        font-size: 13px;
        padding: 15px 8px;
      }
    }
  }
  @media (max-width: 767px) {
    text-align: left;
    li {
      a {
        padding: 11px 10px 19px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    margin-right: 30px;
    li {
      a {
        font-size: 13px;
        padding: 11px 10px 19px;
      }
    }

    li.community {
      a {
        em {
          top: 3px;
          right: -8px;
        }
      }
    }
    li.prediction {
      a {
        span {
          top: 3px;
          right: -8px;
        }
      }
    }
  }

  @media (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-evenly;
    li {
      a {
        font-size: 13px;
        padding: 15px 0;
      }
    }

    li.community {
      a {
        em {
          right: -20px;
        }
      }
    }
    li.prediction {
      a {
        span {
          right: -20px;
        }
      }
    }
  }
`;

export const Aside = styled.aside`
  display: flex;
  height: 100%;
  padding: 9px 0;
  font-size: 14px;
  align-items: center;
  li {
    position: relative;
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  li.dashboardButton {
    display: flex;

    &::before {
      display: block;
      content: "";
      width: 1px;
      height: 10px;
      background-color: #e1e2e3;
      margin: auto 10px;
    }
    a {
      font-size: 12px;
      color: #666;
      line-height: 30px;
      height: 30px;
      border: 1px solid #e1e2e3;
      border-radius: 15px;
      padding: 0 10px;

      font-weight: 400;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }

  li.profileBox {
    button {
      height: 32px;
      display: flex;
      align-items: center;
    }
    .avatarBorder {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: 1px solid #e1e2e3;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .avatarImage {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-image: url("https://s3.ap-northeast-2.amazonaws.com/wanted-public/profile_default.png"),
          url("https://static.wanted.co.kr/images/profile_default.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
      }
    }
    @media (max-width: 991px) {
      display: none;
    }
  }

  .additionalMenu {
    @media (min-width: 992px) and (max-width: 1199px) {
      display: none;
    }
    @media (min-width: 1200px) {
      display: none;
    }
  }
`;
