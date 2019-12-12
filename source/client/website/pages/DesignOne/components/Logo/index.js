import React, { useEffect, useReducer } from "react";
import $ from "./style.css";

export default function Logo(props) {
  return <div class={$.container}>{props.logoText.toUpperCase()}</div>;
}
