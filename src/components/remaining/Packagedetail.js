import React, { useEffect } from 'react';
import { db } from '../Firebase';
import { useParams } from 'react-router-dom';

function Packagedetail() {
	const { id } = useParams();

	useEffect(()=>{
		db.collection("project").doc(id)
		.get().then(data=>{
			console.log(data.data());
		})
		
	})

	return (
		<div className="packagedetail">
			Package
		</div>
	);
}

export default Packagedetail;