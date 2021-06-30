import { shallow } from 'enzyme'
import React from 'react'
import AddCategory from '../../components/AddCategory'


describe('Test on file AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    })
    
    test('should show <AddCategory/> correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change the input text', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';

        // Cambio en el estado de un input 
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('should not post the information on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    })
    
    test('should clean setCategories and clean the text', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
 
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1)
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function))
        expect(input.text().trim()).toBe('');
    })
    
})
