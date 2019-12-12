import React, { useEffect, useReducer } from "react";

import $ from "./style.css";

export default function Text(props) {
  return <div class={$.container}>{props.text}</div>;
}
