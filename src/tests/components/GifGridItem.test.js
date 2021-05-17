import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe( "Tests on GifGridItem component", () => {

	const title = 'Hello my love';
	const url = 'http://localhost/something.jpg';
	const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

	test( "Must be show the component", () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test( "Should have a title on a h3", () => {
		const h3 = wrapper.find( 'h3' );
		expect( h3.text().trim() ).toBe( title );
	});
	
	test( "Should have image equal to url and alt of props", () => {
		const img = wrapper.find( 'img' );
		expect( img.prop( 'src' ) ).toBe( url );
		expect( img.prop( 'alt' ) ).toBe( title );
	});

	test( "Should have animate__fadeIn", () => {
		const div = wrapper.find( 'div' );
		const classes = div.prop( 'className' ).split( " " );
		expect( classes.includes( "animate__fadeIn" ) ).toBe( true );
	});
});
