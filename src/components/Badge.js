import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  width: fit-content;
  background-color: ${props => props.m || (props.active ? "#547FB3" : "white")};
  padding: 3px 11px;
  border-radius: 5px;
  color: ${props => (props.active ? "white" : "#547FB3")};
  font-size: 16px;
  border: ${props => (props.active ? "" : "solid #547FB3 1px")};
`;

export default function NormalBadge({ a = true, backgroundColor }) {
  return (
    <Badge active={a} m={backgroundColor}>
      Asiatisch
    </Badge>
  );
}
