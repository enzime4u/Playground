import React from "react";
import $ from "./style.css";

import TopComponent from "./components/TopComponent";
import SecondComponent from "./components/SecondComponent";

export default function DesignTwo(props) {
  return (
    <div class={$.container}>
      <TopComponent
        menuHeading="My dashboard"
        menuImage="https://www.kidsafeuk.co.uk/wp-content/uploads/2017/07/user-placeholder.gif"
        alerts="2"
      />
      <SecondComponent
        helloText="Hi Dr Bradley"
        wishText="Have a nice day"
        date="Monday, December 16"
      />
    </div>
  );
}
