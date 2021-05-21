import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';


jest.mock( "../../hooks/useFetchGifs" );

describe( "Test's on GifGrid component", () => {

	const category = "Kiss x Sis";
	// let wrapper;
	// beforeEach( () => {
	// 	wrapper = shallow( <GifGrid category={ category }/> );
	// });
	test( "Should show component correctly", () => {
		useFetchGifs.mockReturnValue({
			data: [],
			loading: true,
		});

		const wrapper = shallow( <GifGrid category={ category }/> );
		expect( wrapper ).toMatchSnapshot();
	});

	test( "Should show items when image is loaded", () => {

		const gifs = [{
			id: 'new',
			url: 'http://localhost/any/thing.jpg',
			title: 'Any Thing',
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow( <GifGrid category={ category }/> );
		expect( wrapper ).toMatchSnapshot();
	});


	test( "Must show items when image is loaded", () => {

		const gifs = [{
			id: 'new',
			url: 'http://localhost/any/thing.jpg',
			title: 'Any Thing',
		}];

		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false,
		});
		const wrapper = shallow( <GifGrid category={ category }/> );
		expect( wrapper.find( 'p' ).exists() ).toBe( false );
		expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );
	});

});
