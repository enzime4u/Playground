import useOutsideClick from "~/client/hooks/useOutsideClick";
import useOnEsc from "~/client/hooks/useOnEsc";

export default (ref, isVisible, handler) => {
	useOutsideClick(ref, handler, isVisible);
	useOnEsc(handler, isVisible);
};
