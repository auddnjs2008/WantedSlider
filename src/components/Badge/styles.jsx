import styled from "@emotion/styled";

export const Container = styled.span`
  background-color: rgb(51, 102, 255);
  width: 10px;
  height: 10px;
  border-radius: 2px;
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
