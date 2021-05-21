import { GifExpertApp } from '../GifExpertApp';
import { shallow } from 'enzyme';

describe( "Test's on GifExpertApp component", () => {
	test( "Should show the component", () => {
		const wrapper = shallow( <GifExpertApp /> );
		expect( wrapper ).toMatchSnapshot();
	});

	test( "Should show a list of categories", () => {
		const categories = [ "Naruto", "Ichigo", "Luffy" ];
		const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

		expect( wrapper ).toMatchSnapshot();

		expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );

	});
});
