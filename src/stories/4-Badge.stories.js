import React from "react";
import NormalBadge from "../components/Badge";

export default {
  title: "Badge"
};

export const active = () => <NormalBadge>Türkisch</NormalBadge>;

export const inactive = () => <NormalBadge a={false}>Türkisch</NormalBadge>;

export const redBadge = () => (
  <NormalBadge backgroundColor="#FE6F61">Asiatisch</NormalBadge>
);

// Alte Lösung

//import React from "react";
// import Badge from "../components/Badge";

// export default {
//   title: "Badge"
// };

// export const Filled = () => <Badge />;

// export const Borders = () => (
//   <Badge
//     bgColor="#FFF"
//     border="solid 1px rgba(84, 127, 179, 1)"
//     color="rgba(84, 127, 179, 1)"
//   />
// );
