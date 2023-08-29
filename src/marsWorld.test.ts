import { marsWorld } from "./marsWorld";

describe('Test mars world e2e', () => {
    it('should display (4, 4, E)', () => {
        console.log = jest.fn();
        marsWorld('4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF')
        expect(console.log).toHaveBeenCalledWith('(4, 4, E)')
    })

    it('should display (0, 4, W) LOST', () => {
        console.log = jest.fn();
        marsWorld('4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF')
        expect(console.log).toHaveBeenCalledWith('(0, 4, W) LOST')
    })
})
