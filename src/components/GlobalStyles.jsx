import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const reset = css`
  ${emotionReset}
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border: 0;
    background: none;
  }

  li {
    list-style: none;
  }
`;

export default reset;
