import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  border: 1px solid black;
  .mainbarWrapper {
    position: relative;
    max-width: 1060px;
    border: 1px solid red;

    @media (min-width: 992px) and (max-width: 1199px) {
      margin: 0 auto;
      height: 50px;
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
  border: 1px solid blue;
  button {
    all: unset;
    img {
      all: unset;
      width: 17px;
      height: 14px;
      object-fit: contain;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  border: 1px solid red;
  text-align: center;
  height: inherit;
`;

export const Aside = styled.aside`
  display: flex;
  height: 100%;
  padding: 9px 0;
`;
