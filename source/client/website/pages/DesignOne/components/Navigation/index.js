import React, { useEffect, useReducer } from "react";
import $ from "./style.css";

import NavItem from "./NavItem/index";

import SearchIcon from "$assets/icons/feather/search.svg?inline";
import CartIcon from "$assets/icons/feather/shopping-cart.svg?inline";
import BarsIcon from "$assets/icons/feather/bar-chart-2.svg?inline";

const items = [
  {
    label: "Log In"
  },
  {
    icon: <SearchIcon width="20" height="20" />
  },
  {
    icon: <CartIcon width="20" height="20" />
  },
  {
    icon: <BarsIcon width="20" height="20" />
  }
];

export default function Navigation() {
  return (
    <div class={$.container}>
      {items.map((item, i) => (
        <NavItem key={i} {...item} />
      ))}
    </div>
  );
}
