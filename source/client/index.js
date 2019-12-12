import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Application, Scope, loadable } from "@nore/pwa";

const Website = loadable(() => import("./website"));

function render() {
	const application = (
		<Application title="Ryota">
			<Scope.NotMatched render={Website} />
		</Application>
	);

	const container = document.getElementById("application");

	ReactDOM.render(application, container, () => {
		container.classList.replace("is_loading", "is_loaded");
	});
}

render();

if (IS_DEVELOPMENT) {
	// enable HMR (Hot Module Replacement)
	module.hot && module.hot.accept();
}
