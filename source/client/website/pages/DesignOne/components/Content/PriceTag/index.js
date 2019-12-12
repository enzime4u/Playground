import React from "react";
import $ from "./style.css";

export default function PriceTag({ price }) {
  return <div class={$.price_tag}>{price}</div>;
}
