import React from 'react';
import './App.css';

import Navbar from './components/partials/Navbar';
import Home from './components/Home';
import Packages from './components/remaining/Packages';
import Packagedetail from './components/remaining/Packagedetail';
import Contactus from './components/remaining/Contactus';
import Conformation from './components/remaining/Conformation';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar/>
				<Switch>
					<Route path="/package/:id" exact={true}>
						<Packagedetail />
					</Route>
					<Route path="/conformation" exact={true}>
						<Conformation />
					</Route>
					<Route path="/packages" exact={true}>
						<Packages />
					</Route>
					<Route path="/contactus" exact={true}>
						<Contactus />
					</Route>
					<Route path="/" exact={true}>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;