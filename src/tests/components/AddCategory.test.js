import { AddCategory } from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe( "Tests on AddCategory component", () => {

	const setCategories = () => {
		
	};

	const wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

	test( "Should return ", () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test( "Should change the text box", () => {
		const input = wrapper.find( 'input' );
		const value = "Hello my love!!"
		input.simulate( 'change', { target: { value } });
	});
});

