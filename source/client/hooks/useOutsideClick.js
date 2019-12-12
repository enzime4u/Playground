import React, { useLayoutEffect } from "react";

export default function useOutsideClick(ref, handler, isActive = true) {
	function handle(event) {
		if (ref && ref.current && !ref.current.contains(event.target)) {
			handler(event);
		}
	}

	useLayoutEffect(() => {
		if (!isActive) return;

		document.addEventListener("click", handle);
		document.addEventListener("touchstart", handle);

		return () => {
			document.removeEventListener("click", handle);
			document.removeEventListener("touchstart", handle);
		};
	}, [ref, handler, isActive]);
}
