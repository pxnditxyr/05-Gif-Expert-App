// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {


	const { data, loading } = useFetchGifs();
	console.log( data );
	console.log( loading );
	// const [ images, setImages ] = useState( [] );
	// useEffect( () => {
	// 	getGifs( category )
	// 		.then( imgs => {
	// 			setImages( imgs );
	// 		});
	// }, [ category ])


	return (
		<>
			<h2> { category } </h2>
			{ loading ? 'Loading...' : 'Data charge done' }
			{/* <div className="card-grid"> */}
			{/* 	{ */}
			{/* 		images.map( img => ( */}
			{/* 			<GifGridItem */}
			{/* 				key={ img.id } */}
			{/* 				{ ...img  } */}
			{/* 			/> */}
			{/* 		)) */}
			{/* 	} */}
			{/* </div> */}
		</>
	);
};

GifGrid.prototype = {
	category: PropTypes.string.isRequired,
}
GifGrid.defaultProps = {
	category: "Nuevo"
}
