import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

describe( "Test's on GifGrid component", () => {
	const category = "Kiss x Sis";
	let wrapper;
	beforeEach( () => {
		wrapper = shallow( <GifGrid category={ category }/> );
	});
	test( "Should show component correctly", () => {
		
		expect( wrapper ).toMatchSnapshot();
	});
});
