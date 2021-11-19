import React from "react";
import { Link } from "react-router-dom";
import { renderRoutes } from "react-router-config";

function App(props) {
	return (
		<div className="App">
			<Link to="/home">Home</Link>
			<Link to="/about">About</Link>
			<div className="Children">
				{/* 类插槽 */}
				{props.children}
			</div>
			{renderRoutes(props.route.routes)}
		</div>
	);
}

export default App;
