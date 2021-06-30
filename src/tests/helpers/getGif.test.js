import { getGif } from "../../helpers/getGifs"

describe('Tests on file getGif', () => {
    
    test('should bring ten elements', async() => {
        const gifs = await getGif('Naruto');
        expect(gifs.length).toBe(8);
    })

    test('should bring 0 elements', async() => {
        const gifs = await getGif('');
        expect(gifs.length).toBe(0);
    })
    
})
