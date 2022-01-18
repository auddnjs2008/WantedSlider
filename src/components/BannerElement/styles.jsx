import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  margin-top: 20px;
  /* margin-left: 25px; */
  filter: ${(props) =>
    props.current ? "brightness(100%)" : "brightness(70%)"};
  width: 70%;
  flex-shrink: 0;
  .content {
    width: 100%;
    padding: 0 10px;
    .content__imgWrapper {
      width: 100%;
      a {
        width: inherit;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: contain;
      }
    }

    .content__infoWrapper {
      text-align: center;
      h2 {
        margin-top: 20px;
        font-size: 18px;
        line-height: 1;
        font-weight: 700;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      h3 {
        margin-top: 6px;
        font-size: 13px;
        font-weight: 500px;
        line-height: 1.15;
        color: #666;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 6px;
      }
      hr {
        height: 1px;
        margin: 0;
        border: none;

        flex-shrink: 0;
        display: none;
        background-color: #ececec;
      }
      a {
        font-size: 14px;
        font-weight: 700;
        line-height: 1;
        color: #36f;

        height: 40px;
        padding: 6px 8px;
        span {
          margin-left: 5px;
        }
      }
      @media (min-width: 1200px) {
        position: absolute;
        bottom: 28px;
        left: 34px;
        width: 300px;
        height: 130px;
        border-radius: 4px;
        background-color: #fff;
        /* opacity: 0; */
        text-align: left;
        h2 {
          margin-left: 20px;
          margin-right: 20px;
          font-size: 16px;
          line-height: 1.5;
        }
        h3 {
          margin: 0 20px;
          height: 44px;
          font-size: 11px;
          line-height: 1.64;
          color: #333;
        }
        hr {
          display: block;
          margin-bottom: 10px;
        }
        a {
          margin: 6px 0 0 13px;
        }
      }
    }
  }
  /* @media (min-width: 1200px) {
    padding: 0 12px;
    box-sizing: content-box;
  } */
`;
