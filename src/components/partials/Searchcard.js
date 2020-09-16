import React from 'react';
import './Searchcard.css';
import { useHistory } from 'react-router-dom';

function Searchcard({pack}) {
	const history = useHistory();

	const goToDetails=()=>{
		history.push(`./package/${pack.id}`);
	}

	return (
		<div className="searchcard" onClick={goToDetails}>
			<div className="searchcard-body">
				<div className="searchcard-left">
					<h1>{pack.packagename}</h1>
					<p>{pack.startlocation}</p>
					<p>{pack.destination}</p>
					<p>{pack.duration}</p>
					<p>{pack.price}</p>
					<small>Click for More Info ...</small>
				</div>
				<div className="searchcard-right">	
					<img src={pack.image1} width="100%" alt=""/>
				</div>
			</div>
		</div>
	);
}

export default Searchcard;