import React, { useEffect, useReducer } from "react";
import $ from "./style.css";

export default function SlideButtons() {
  return (
    <div class={$.container}>
      <span class={$.slideButton}></span>
      <span class={$.slideButton}></span>
      <span class={$.slideButton}></span>
      <span class={$.slideButton}></span>
      <span class={$.slideButton}></span>
    </div>
  );
}
