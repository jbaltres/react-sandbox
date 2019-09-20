import React from "react";
import styled from "styled-components";

const Badge = styled.div`
  width: fit-content;
  background-color: #547fb3;
  padding: 3px 11px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
`;

export default function NormalBadge() {
  return <Badge>Asiatisch</Badge>;
}
