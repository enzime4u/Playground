import React, { useEffect, useReducer } from "react";
import DesignOne from "./pages/DesignOne";
import DesingTwo from "./pages/DesignTwo";
import $ from "./style.css";
import DesignTwo from "./pages/DesignTwo";

export default function Website(attrs) {
  return (
    <div class={$.container}>
      <DesignTwo />
    </div>
  );
}
