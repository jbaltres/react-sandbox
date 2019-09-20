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

// Alte Lösung

// import React from "react";
// import styled from "styled-components";

// const Badge = styled.div`
//   display: inline-block;
//   background: ${props => props.bgColor};
//   border-radius: 5px;
//   padding: 3px 10px;
//   color: ${props => props.color};
//   border: ${props => props.border};
// `;

// export default function ColoredBadge({
//   category = "Asiatisch",
//   bgColor = "rgba(84, 127, 179, 1)",
//   border = "",
//   color = "rgba(255, 255, 255, 1)"
// }) {
//   return (
//     <Badge value={category} bgColor={bgColor} border={border} color={color}>
//       {category}
//     </Badge>
//   );
// }
