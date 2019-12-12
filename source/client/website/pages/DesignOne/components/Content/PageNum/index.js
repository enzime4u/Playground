import React, { useEffect, useReducer } from "react";
import $ from "./style.css";

export default function PageNum({ number }) {
  return <div class={$.number}>{number}</div>;
}
