import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

	const [ images, setImages ] = useState( [] );
	useEffect( () => {
		getImages();
	}, [])

	const getImages = async() => {

		const url      = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=mlKQ969mBMhRH4cz0k3RRVsHGbrnWJ57`;
		const response = await fetch( url );
		const { data } = await response.json();
		const gifs     = data.map( img => {
			return ({
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url,
			});
		});

		setImages( gifs );
	};


	return (
		<>
			<h2> { category } </h2>
			<div className="card-grid">
				{
					images.map( img => (
						<GifGridItem
							key={ img.id }
							{ ...img  }
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
