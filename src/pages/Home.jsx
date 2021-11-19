import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
	console.log(props);
	return (
		<>
			<div className="Home">
				<h1>Home</h1>
				<Link to="/home/helloword">HelloWord</Link>
			</div>
			<div className="HomeChildren">{props.children}</div>
		</>
	);
}

export default Home;