import React from "react";
import $ from "./style.css";

import MenuIcon from "$assets/icons/feather/menu.svg?inline";

export default function TopComponent({ menuHeading, menuImage, alerts }) {
  return (
    <div class={$.container}>
      <div class={$.left_side}>
        <MenuIcon width="20" height="20" />
        <span class={$.heading}>{menuHeading}</span>
      </div>
      <div class={$.right_side}>
        <img class={$.userImage} src={menuImage} />
        <span class={$.badge}>{alerts}</span>
      </div>
    </div>
  );
}
