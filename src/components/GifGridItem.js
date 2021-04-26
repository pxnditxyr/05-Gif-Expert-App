import React from 'react';

export const GifGridItem = ({ title, url }) => {

	return (
		<div className="card">
			<img src={ url } alt={ title } />
			<h3> { title } </h3>
		</div>
	);
}
