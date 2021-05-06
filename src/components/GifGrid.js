// import React, { useState, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

	const { data:gifs, loading } = useFetchGifs( category );

	return (
		<>
			<h2> { category } </h2>
			
			{ loading && <p> Loading... </p> }

			<div className="card-grid">
				{
					gifs.map( gif => (
						<GifGridItem
							key={ gif.id }
							{ ...gif }
						/>
					))
				}
			</div>
		</>
	);
};

GifGrid.prototype = {
	category: PropTypes.string.isRequired,
}
GifGrid.defaultProps = {
	category: "Nuevo"
}
