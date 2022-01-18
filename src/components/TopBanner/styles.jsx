import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  overflow: hidden;

  button {
    position: absolute;
    top: 110px;
    width: 30px;
    height: 50px;
    opacity: 0.5;
    border-radius: 15px;
    background-color: #fff;
    font-size: 16px;
    @media (max-width: 1199px) {
      display: none;
    }
  }

  button.left {
    left: calc(12.5% - 30px);
  }

  button.right {
    right: calc(12.5% - 30px);
  }
`;

export const SlickSlider = styled.div`
  position: relative;
  display: block;
  user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
`;

export const SlickList = styled.div`
  position: relative;
  display: block;
  /* overflow: hidden; */
  /* padding: 0px 40px; */

  .slickTrack {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
`;
