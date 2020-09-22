import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import './Packagedetail.css';
import { useStateValue } from'../StateProvider';

function Packagedetail() {
	const { id } = useParams();
	const history = useHistory();
	const [{user}, dispatch] = useStateValue();
	const loc = useLocation();

	const [pack, setPack] = useState({});
	const [description, setDescription] = useState([]);
	const [ticketno, setTicketno] = useState(1);

	useEffect(()=>{	
		db.collection("project").doc(id)
		.get().then(data=>{
			var temppack = data.data();
			setPack(temppack);
			setDescription(temppack.description);
		});
	}, []);

	const handleTicketno = (e) =>{
		let val = e.target.value;
		if(val < 1)
			setTicketno(1);
		else if(val >= pack.tickets)
			setTicketno(pack.tickets);
		else 
			setTicketno(val);
	};

	const handlePackSubmit = (e) =>{
		e.preventDefault();
		if (user){
			dispatch({	
				type: 'SET_PACK',
				packid: id,
				tickets: ticketno
			});

			history.push('/conformation');
		}else{
			dispatch({
				type: 'SET_PATH',
				path: loc.pathname
			});
			history.push('/login');
		}
		
	};

	return (
		<div className="packagedetail">
			<div className="packagedetail-body">
				<div className="packagedetail-left">
					<h1 className="page-title">{pack.packagename}</h1>
					
					<div className="packagedetail-image" id="photos">
						<img src={pack.image1} alt=""/>
					</div>
					<h2 className="packagedetail-title" id="overview">Overview</h2>
					<div className="packagedetail-overview">
						{pack.overview}
					</div>
					<div className='packagedetail-detailbox'>
						<div>
							<h3>Book for tickets here</h3>
							<span className="green lar">NRs. {pack.price}</span><strong> /- per person</strong>
						</div>
						<form className="packagedetail-form">
							<input type="number" value={ticketno} onChange={handleTicketno} />
							<span className="x">x</span>
							<div>
								<span className="green">{pack.tickets}</span> tickets available<br/>
								<button onClick={handlePackSubmit}>Buy Tickets Now</button>
							</div>
							<div className="packagedetail-inactivestar"><i className="fa fa-star-o" aria-hidden="true"></i></div>
						</form>
					</div>

					<h2 className="packagedetail-title" id="description">Package Details</h2>

					{description.map( (dep, index) => {
						var splitdata = dep.split('%');
						return(
							<div className="descriptionbox" key={index}>
								<div className='packagedetail-descriptionbox-left'>
									Day {index+1}
								</div>
								<div className='packagedetail-descriptionbox-right'>
									<span key={index} className="description-circle">start</span>
									{splitdata.map((data, index) => {
										if((index+1)%2 === 0){
											if(data === 'return'){
												return(
													<span key={index} className="description-circle">{pack.startlocation} </span>
												);
											}else{
												return(
													<span key={index} className="description-circle">{data} </span>
												);
											}
											
										}else{
											if(data === "plane"){
												return(
													<span key={index} className="description-transportation">
														<i className="fa fa-plane fa-2x" aria-hidden="true"></i>
													</span>
												);
											}else if(data === "bus"){
												return(
													<span key={index} className="description-transportation">
														<i className="fa fa-bus fa-2x" aria-hidden="true"></i>
													</span>
												);
											}

										}
										
									})}
								</div>
							</div>
						);
					})}
					
					<h2 className="packagedetail-title" id="detail">Destination Info</h2>
				</div>
				<div className="packagedetail-right">
					<a href="#photos">Photos</a>
					<a href="#overview">Overview</a>
					<a href="#description">Package Details</a>
					<a href="#detail">Destination Info</a>
					<a href="#hotels">Hotel Details</a>
				</div>
			</div>
		</div>
	);
}

export default Packagedetail;