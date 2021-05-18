import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe( "Tests on AddCategory component", () => {

	const setCategories = jest.fn();
	let wrapper;

	beforeEach( () => {
		jest.clearAllMocks()
		wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
	});

	test( "Should return ", () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test( "Should change the text box", () => {
		const input = wrapper.find( 'input' );
		const value = "Hello my love!!"

		input.simulate( 'change', { target: { value } });
		const p = wrapper.find( 'p' );
		expect( p.text().trim() ).toBe( value );
	});


	test( "Dont should submit changes", () => {
		const form = wrapper.find( 'form' );
		form.simulate( 'submit', { preventDefault(){} } );
		expect( setCategories ).not.toHaveBeenCalled();
	});

	test( "Should call setCategories and clear text box", () => {

		const value = "Hello my love!!"

		wrapper.find( 'input' ).simulate( 'change', { target: { value } });

		wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

		expect( setCategories ).toHaveBeenCalled();
		expect( setCategories ).toHaveBeenCalledTimes( 1 );
		expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

		expect( wrapper.find( 'input' ).prop( 'value' ) ).toBe( "" );


	});
});

