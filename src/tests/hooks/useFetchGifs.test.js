import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Test on file useFetchGifs', () => {
    
    test('should return inicitial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto'));
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBeTruthy()
    })
    
    test('should return an images array and loading equal to false', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Naruto'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(8);
        expect(loading).toBeFalsy();
    })

})
