import React from "react";
import $ from "./style.css";

export default function NavItem(props) {
  return props.icon ? (
    <div class={$.icon}>{props.icon}</div>
  ) : (
    <div class={$.label}>{props.label.toUpperCase()}</div>
  );
}
