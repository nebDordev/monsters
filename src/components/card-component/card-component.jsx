import React from 'react';
import './card-component.css';

export const Card = props => (
	<div className='card-container'>
		<img alt='monster' className='top' src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
		<img alt='monster' className='bottom' src={`https://robohash.org/${props.monster.id}?set=set4`} />
		<h2> {props.monster.name} </h2>
		<h3> {props.monster.email} </h3>
	</div>

) 