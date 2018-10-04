import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import templateAction from "../js/actions/template";

const mapStateToProps = store => {
	let { template } = store;
	return {
		template
	};
};

const mapDispatchToProps = dispatch => {
	return {
		switch: () => {
			dispatch(templateAction.template());
		}
	};
};
export class Content extends Component {
	render() {
		return (
			<Fragment>
				<p className="App-intro">
					The template state is now:
					{this.props.template.template ? "true" : "false"}
				</p>
				<button onClick={this.props.switch}>Switch!</button>
			</Fragment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Content);
