import React, { useState, useEffect } from 'react';
import Searchcard from '../partials/Searchcard';
import { useStateValue } from '../StateProvider';
import { db } from '../Firebase';
import './Packages.css'

function Packages() {
	const [{search}, dispatch] = useStateValue();

	const [packageSearch,setPackageSearch] = useState('');
	const [startLocSearch,setStartLocSearch] = useState('');
	const [packages,setPackages] = useState([]);

	useEffect(()=>{
		setPackageSearch(search);
		db.collection("project")
			.onSnapshot(function(docs) {
				docs.forEach(doc=>{
					var pack = doc.data();
					pack.id = doc.id;
					if(search){
						if(pack.packagename.toLowerCase().includes(search.toLowerCase()) || pack.destination.toLowerCase().includes(search.toLowerCase()) ){
							setPackages(packages => [...packages, pack]);
						}
					}
					else{
						setPackages(packages => [...packages, pack]);
					}
				})
			})
	}, []);

	const handleSearch = (e) =>{
		e.preventDefault();

		db.collection("project")
			.onSnapshot(function(docs) {
				setPackages([]);
				docs.forEach(doc=>{
					var pack = doc.data();
					pack.id = doc.id;
					if(packageSearch){
						if(pack.packagename.toLowerCase().includes(packageSearch.toLowerCase()) 
							|| pack.destination.toLowerCase().includes(packageSearch.toLowerCase()) ){
							setPackages(packages => [...packages, pack]);
						}
					}else{
						setPackages(packages => [...packages, pack]);
					}
					
				})
			})

		dispatch({
			type: 'SET_SEARCH',
			search: packageSearch,
		});
	};

	const handlePackageChange = (e) =>{
		setPackageSearch(e.target.value);
	};
	const handleStartLocChange = (e) =>{
		setStartLocSearch(e.target.value);
	};

	return (
		<div className="packages">
			<div className="packages-body">
				<form className="packages-form">
					<div className="packages-form-inputplace">
						<input type="text" name="search" placeholder="Search package" value={packageSearch} onChange={handlePackageChange}/>
					</div>
					<div className="packages-form-inputplace">
						<input type="text" name="start" placeholder="Start location" value={startLocSearch} onChange={handleStartLocChange}/>
					</div>
					<button onClick={handleSearch}>Filter</button>
				</form>
				<div className="packages-title">Our Packages:</div>
				{ packages.length === 0 ? 
					<div className="packages-empty">No Packages Found</div> :
					packages.map( pack => (
						<Searchcard key={pack.id} pack={pack}/>
					))
				}
			</div>
		</div>
	);
}

export default Packages;