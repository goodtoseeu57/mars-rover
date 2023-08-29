import { marsWorld } from ".";

describe('Test e2e the mars world', () => {
    it('should display (4, 4, E)', () => {
        console.log = jest.fn();
        marsWorld("4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF")
        expect(console.log).toHaveBeenCalledWith('(4, 4, E)')
    })
})
