import React, { useState } from 'react';
import { useStateValue } from'../StateProvider';
import './Conformation.css';

function Conformation() {
	const [{pack, user}] = useStateValue();

	const [checkval, setCheckval] = useState(false);
	const [selectval, setSelectval] = useState({payment: 'none', selected: false});
	const [phoneval, setPhoneval] = useState({phone: '', validated: false});
	const [ticketval, setTicketval] = useState(pack.tickets);

	const handleCheck =(e)=>{
		setCheckval(!checkval);
	};

	const handleTicket =(e)=>{
		if (e.target.value <= 0){
			setTicketval(0);
		}else{
			setTicketval(e.target.value);
		}
		
	};

	const handlePhone =(e)=>{
		if (e.target.value === ''){
			setPhoneval({phone: e.target.value, validated: false});
		}else{
			setPhoneval({phone: e.target.value, validated: true});
		}
	};

	const handleSelect =(e)=>{
		if (e.target.value === 'none'){
			setSelectval({payment: e.target.value, selected: false});
		}else{
			setSelectval({payment: e.target.value, selected: true});
		}
		
	};

	if ( pack.id && user){
		return (
			<div className="conformation">
				<div className="conformation-body">
					<h3>Conformation Page</h3>
					<div>
						<small>Confirm your tickets</small><br/>
						Tickets: <input type="number" value={ticketval} onChange={handleTicket}/> for "{pack.id}"
					</div>
					<div>
						<small>Confirm your phone number</small><br/>
						Phone Number: <input type="text" value={phoneval.phone} onChange={handlePhone}/>
					</div>
					<div>
						<small>Confirm your payment method</small><br/>
						Payment Method:
						<select value={selectval.paymentval} onChange={handleSelect}>
							<option value="none">None</option>
							<option value="esewa">Esewa</option>
						</select>
					</div>
					<ol>
						<li>The ticket cost only covers the transpotation fare, accomodation fare and food ( breakfst, lunch and dinner ).
						 The customer is responsible for any extra charges (entry fees, souveniers and extra services). </li>
						<li>Customer are requested to travel as per the direction of the guide and not wander around without the asking the 
						guide.</li>
						<li>Keep close eye on your baggage, cash and other items. We will not be held responsible for any baggage or cash lost during the travel.</li>
					</ol>
					<input type="checkbox" checked={checkval} onChange={handleCheck}/>Please tick the box
					<div><small><strong>By clicking the checkbox, you agreed to all of our terms.</strong></small></div>
					<button disabled={!(checkval && selectval.selected && ticketval!==0)}>Buy</button>
				</div>
			</div>
		);
	}else{
		return(
			<div>Access Denied</div>
		);
	}
	
}

export default Conformation;