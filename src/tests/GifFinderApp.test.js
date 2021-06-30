import { shallow } from "enzyme"
import GifFinderApp from "../GifFinderApp"

describe('Test on file GifFinderApp', () => {
    
    test('should show <GifFinderApp /> correctly', () => {
        const wrapper = shallow(<GifFinderApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show a category list', () => {
        const categories = ['Hinata', 'Chitanda'];
        const wrapper = shallow(<GifFinderApp defaultCategories={ categories } />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
})
