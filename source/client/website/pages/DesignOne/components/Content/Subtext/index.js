import React from "react";
import $ from "./style.css";

export default function Subtext({ smallText, title }) {
  return (
    <div class={$.container}>
      <div class={$.smallText}>{smallText}</div>
      <div class={$.title}>{title.toUpperCase()}</div>
    </div>
  );
}
