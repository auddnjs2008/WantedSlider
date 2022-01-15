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

  li {
    list-style: none;
  }
`;

export default reset;
