import React from "react";
import $ from "./style.css";

export default function Subtext({ text }) {
  return (
    <div class={$.container}>
      <div class={$.smallHeading}>{text.toUpperCase()}</div>
    </div>
  );
}
