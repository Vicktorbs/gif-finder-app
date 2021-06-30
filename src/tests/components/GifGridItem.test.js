import { shallow } from 'enzyme';
import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';

const title = "i just love her naruto shippuden GIF"
const url = "https://media1.giphy.com/media/qKr1nIRfIQPYI/giphy.gif?cid=c4f74b61bdxuxtgjry3au947bwjp4fc6uncmdmfvt0b48g7v&rid=giphy.gif&ct=g"
const wraper = shallow(<GifGridItem key="123" title={ title } url={ url } />) 

describe('Test on file <GifGridItem />', () => {

    test('should show GifGridItem correctly', () => {
        expect(wraper).toMatchSnapshot()
    })

    test('should has a pharagrap with the title', () => {
        const p = wraper.find('p');
        expect(p.text().trim()).toBe(title);
    })
    
    test('<img> should has the same url and alt from props', () => {
        const img = wraper.find('img');
        // .props extrae solo las propiedades de el elemento seleccionado por el wrapper
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })
    
    test('<img> should has the class animate__fadeIn', () => {
        const div = wraper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
    })
    

})
