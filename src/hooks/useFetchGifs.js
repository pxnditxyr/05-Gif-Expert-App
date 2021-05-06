import { useState, useEffect } from 'react';
import { getFetchGifs } from '../helpers/getFetchGifs';

export const useFetchGifs = ( category ) => {

	const [ state, setState ] = useState({
		data: [],
		loading: true,
	});

	useEffect( () => {

		getFetchGifs( category )
			.then( gifs => {

				setTimeout( () => {
					setState({
						data: gifs,
						loading: false,
					});
				}, 3000);

			});

	}, [ category ]);

	return state;
};
