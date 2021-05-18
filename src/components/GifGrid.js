import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	const { data:gifs, loading } = useFetchGifs( category );

	return (
		<>
			<h2 className="animate__animated animate__fadeIn"> { category } </h2>
			
			{ loading && <p className="animate__animated animate__flash"> Loading... </p> }

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
