import { getFetchGifs } from '../../helpers/getFetchGifs';

describe( "Tests on getFetchGifs function", () => {
	
	test( "Should return a promise and after an array", async() => {
		const gifs = await getFetchGifs( "I love you" );
		expect( gifs.length ).toBe( 10 )
	});

	test( "Should return an void array", async() => {
		const gifs = await getFetchGifs( "" );
		expect( gifs.length ).toBe( 0 );
	});
});

