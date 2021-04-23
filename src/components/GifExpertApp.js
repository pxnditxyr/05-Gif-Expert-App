import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

	// const categories = [ "Naruto", "Bleach", "One Piece" ];
	//const [ categories, setCategories ] = useState( ["Naruto", "Bleach", "One Piece", "KissxSis"] );
	const [ categories, setCategories ] = useState( ["Naruto"] );


	// const handleAdd = () => setCategories( [...categories, "KissxSis"] )

	return (

		<>
			<h2> GifExpertApp XD </h2>
			<AddCategory setCategories={ setCategories } />
			<hr />
			{/* <button onClick={ handleAdd }> Add </button> */}
			<ol>
				{
					categories.map( category =>
						<GifGrid
							key={ category }
							category={ category }
						/>
						//{/* <li key={ category }> { category } </li> */}
					)
				}
			</ol>
		</>
	);
};
