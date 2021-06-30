import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test on File GifGrid', () => {
    
    test('should show <GifGrid /> correctly', () => {
        // REgresa informacion "falsa" que se podra utilizar cuando se implemente el custom hook
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={ 'hinata' }/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('should show items when useFetchGifs loads images', () => {
        const gifs = [{
            id: 'qKr1nIRfIQPYI',
            url: 'https://media1.giphy.com/media/qKr1nIRfIQPYI/giphy.gif?cid=c4f74b61bdxuxtgjry3au947bwjp4fc6uncmdmfvt0b48g7v&rid=giphy.gif&ct=g',
            title: 'i just love her naruto shippuden GIF'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={ 'hinata' }/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    
})
