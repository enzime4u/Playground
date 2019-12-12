import React, { useEffect, useReducer } from "react";
import $ from "./style.css";

import PriceTag from "./PriceTag";
import Text from "./Text";
import ShopNow from "./ShopNow";
import Subtext from "./Subtext";
import PageNum from "./PageNum";
import SmallHeading from "./SmallHeading";

export default function Content(props) {
  return (
    <div class={$.container}>
      <SmallHeading text="lorem ipsum" />
      <Text text={props.data.text.toUpperCase()} />
      <Subtext smallText="Design by" title="j. david.leo" />
      <PriceTag price="$11.49" />
      <ShopNow linkText="shop now ->" />
      <PageNum number="01" />
    </div>
  );
}
