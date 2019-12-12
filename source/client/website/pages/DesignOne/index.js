import React from "react";
import $ from "./style.css";

import Logo from "./components/Logo/index";
import Navigation from "./components/Navigation/index";
import Content from "./components/Content";
import SlideButtons from "./components/SlideButtons/index";
const data = {
  text: "Lucy",
  logoText: "furnde"
};

export default function DesingOne() {
  return (
    <div class={$.container}>
      <Logo logoText={data.logoText} />
      <Navigation />
      <Content data={data} />
      <SlideButtons />
    </div>
  );
}
