import React from "react";
import IconButton from "../components/IconButton";
import Star from "../Icons/Star";
import Walk from "../Icons/Walk";

export default {
  title: "IconButton"
};

export const Inactive = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const Active = () => (
  <IconButton>
    <Star />
  </IconButton>
);
