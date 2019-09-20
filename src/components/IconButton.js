import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: blue;
  padding: 14px;
  border-radius: 10px;
  fill: white;
  box-shadow: 5px 8px 2px rgba(244, 0, 0, 0.3);
`;

export default function IconButton({ children }) {
  return <Button>{children}</Button>;
}
