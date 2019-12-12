import React, { useLayoutEffect } from "react";

export default function useOutsideClick(handler, isActive = true) {
	function onKeyPress(event) {
		if (event.keyCode === 27) {
			handler(event);
		}
	}

	useLayoutEffect(() => {
		if (!isActive) return;

		document.addEventListener("keyup", onKeyPress, false);

		return () => {
			document.removeEventListener("keyup", onKeyPress, false);
		};
	}, [handler, isActive]);
}
