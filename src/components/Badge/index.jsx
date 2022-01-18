import React from "react";
import { Container } from "./styles";

const Badge = ({ top, left }) => {
  return (
    <Container top={top} left={left}>
      <svg class="" width="4" height="4" viewBox="0 0 6 6">
        <g fill="#fff" fillRule="nonzero">
          <path
            d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
            transform="translate(-123 -375) translate(20 365) translate(98 5)"
          ></path>
        </g>
      </svg>
    </Container>
  );
};

export default Badge;
