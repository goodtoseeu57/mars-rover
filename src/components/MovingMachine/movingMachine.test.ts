import { OrientationDirection } from "../CalculateOrientation/types";
import { movingInMars, updateRobot } from "./movingMachine";


describe('Test the moving in mars function', () => {
    it('should display Lost', () => {
        console.log = jest.fn();
        movingInMars(OrientationDirection.South, { x: 0, y: 0 }, 4, 8)
        expect(console.log).toHaveBeenCalledWith('(0, 0, S) LOST')
    })

    it('should display this', () => {
        expect(movingInMars(OrientationDirection.South, { x: 0, y: 1 }, 4, 8)).toEqual({ "x": 0, "y": 0 })
    })
})


describe('Test update robot functionality', () => {
    it('should display (4, 4, E)', () => {
        console.log = jest.fn();
        updateRobot(2, 3, OrientationDirection.East, [ 'L','F','R','F','F' ], 4, 8)
        expect(console.log).toHaveBeenCalledWith('(4, 4, E)')
    })

    it('should display (0, 4, W) LOST', () => {
        console.log = jest.fn();
        updateRobot(0, 2, OrientationDirection.North, ["F", "F", "L", "F", "R", "F", "F"], 4, 8)
        expect(console.log).toHaveBeenCalledWith('(0, 4, W) LOST')
    })
})



