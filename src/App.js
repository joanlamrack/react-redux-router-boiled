import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import store from "./js/store";
import { Provider } from "react-redux";
class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainPage />
			</Provider>
		);
	}
}

export default App;
