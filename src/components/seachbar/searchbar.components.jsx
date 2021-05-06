import React from 'react';

import './searchbar.style.css';

export const SearchBar=({placeholder,handlechange})=>(
	<input 
	className='search'
	type='search' 
	placeholder={placeholder} 
	onChange={handlechange}/>

	)