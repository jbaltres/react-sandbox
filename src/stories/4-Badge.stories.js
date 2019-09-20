import React from "react";
import NormalBadge from "../components/Badge";

export default {
  title: "Badge"
};

export const active = () => <NormalBadge />;

export const redBadge = () => <NormalBadge backgroundColor="#FE6F61" />;

export const inactive = () => <NormalBadge a={false} />;
