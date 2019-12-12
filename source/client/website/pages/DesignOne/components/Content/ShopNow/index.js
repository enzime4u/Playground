import React from "react";
import $ from "./style.css";


export default function ShopNow(props) {
    return (
        <div class={$.shop_now}>
            {props.linkText.toUpperCase()}
        </div>
    )
}