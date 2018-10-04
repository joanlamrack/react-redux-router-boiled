import React, { Component } from "react";
import Content from "../containers/Content";
import Header from "../containers/Header";

export default class MainPage extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Content />
			</div>
		);
	}
}
