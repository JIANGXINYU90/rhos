import React, { Component } from "react";

export default class Helloword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: "Helloword",
		};
	}
	render() {
		return <div>Helloword</div>;
	}
}
