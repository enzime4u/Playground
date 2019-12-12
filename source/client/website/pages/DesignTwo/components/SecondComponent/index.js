import React from "react";
import $ from "./style.css";

export default function SecondComponent({ helloText, wishText, date }) {
  return (
    <div class={$.container}>
      <p class={$.hello}>{helloText}</p>
      <p class={$.wish}>{wishText}</p>
      <p class={$.date}>{date}</p>
    </div>
  );
}
