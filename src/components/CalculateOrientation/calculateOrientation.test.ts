import calculateOrientation from "./calculateOrientation";
import { getMoveFromString, getOrientationFromString } from "../../utils/utils";
import { OrientationDirection } from "./types";

describe('Test calculateOrientation functionality', () => {

    it('should return West as the new orientation when current orientation is South and the next move is Right', () => {
        const move = getMoveFromString('R')
        const currentOrientation = getOrientationFromString('S');
        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.West)
        }
    })

    it('should return East as the new orientation when current orientation is South and the next move is Left', () => {
        const move = getMoveFromString('L')
        const currentOrientation = getOrientationFromString('S');
        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.East)
        }
    })

    it('should return North as the new orientation when current orientation is East and the next move is Left', () => {
        const move = getMoveFromString('L');
        const currentOrientation = getOrientationFromString('E');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.North);
        }
    });

    it('should return South as the new orientation when current orientation is East and the next move is Right', () => {
        const move = getMoveFromString('R');
        const currentOrientation = getOrientationFromString('E');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.South);
        }
    });

    it('should return East as the new orientation when current orientation is North and the next move is Right', () => {
        const move = getMoveFromString('R');
        const currentOrientation = getOrientationFromString('N');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.East);
        }
    });

    it('should return South as the new orientation when current orientation is North and the next move is Left', () => {
        const move = getMoveFromString('L');
        const currentOrientation = getOrientationFromString('N');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.West);
        }
    });

    it('should return East as the new orientation when current orientation is South and the next move is Left', () => {
        const move = getMoveFromString('L');
        const currentOrientation = getOrientationFromString('S');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.East)
        }
    });

    it('should return North as the new orientation when current orientation is West and the next move is Right', () => {
        const move = getMoveFromString('R');
        const currentOrientation = getOrientationFromString('W');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.North);
        }
    });

    it('should return South as the new orientation when current orientation is West and the next move is Left', () => {
        const move = getMoveFromString('L');
        const currentOrientation = getOrientationFromString('W');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.South);
        }
    });

    it('should return the same orientation as move is forward', () => {
        const move = getMoveFromString('F');
        const currentOrientation = getOrientationFromString('W');

        if (currentOrientation && move) {
            expect(calculateOrientation(currentOrientation, move)).toEqual(OrientationDirection.West);
        }
    });

})