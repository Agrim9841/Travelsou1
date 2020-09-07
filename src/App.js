import React from 'react';
import './App.css';

import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Packages from './components/remaining/Packages';
import Contactus from './components/remaining/Contactus';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div class="App">
				<Navbar/>
				<Switch>
					<Route path="/packages" exact="true">
						<Packages />
					</Route>
					<Route path="/contactus" exact="true">
						<Contactus />
					</Route>
					<Route path="/" exact="true">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;