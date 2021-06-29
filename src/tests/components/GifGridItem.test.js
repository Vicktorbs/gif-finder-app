import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';


describe('Test on file <GifGridItem />', () => {
    test('should show GifGridItem correctly', () => {
        const wraper = shallow(<GifGridItem />) 
        expect(wraper).toMatchSnapshot()
    })
    
})
