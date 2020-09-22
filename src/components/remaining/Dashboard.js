import React from 'react';
import { useStateValue } from'../StateProvider';
import {auth} from '../Firebase';
import { useHistory } from 'react-router-dom';

function Dashboard() {
	const [{user}] = useStateValue();
	const history = useHistory();

	const logout = ()=>{
		if(user){
			auth.signOut();
			history.push('./');
		}else{
			alert("no use currently");
		}
	}

	if (user){
		return (
			<div className="dashboard">
				
				<button onClick={logout}>Logout</button>
				
			</div>
		);
	}else{
		return(
			<div>Access Denied</div>
		);
	}
	
}

export default Dashboard;