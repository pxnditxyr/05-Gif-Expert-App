import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe( "Test's on hook useFetchGifs", () => {

	test( "Should return initial state", async() => {
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'New' ));
		const { data, loading } = result.current;

		await waitForNextUpdate();

		expect( data ).toEqual( [] );
		expect( loading ).toBe( true );
		
	});

	test( "Should return an array of images", async() => {
		const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'New' ));
		await waitForNextUpdate();

		const { data, loading } = result.current;

		expect( data.length ).toBe( 10 );
		expect( loading ).toBe( false );

	});

});
