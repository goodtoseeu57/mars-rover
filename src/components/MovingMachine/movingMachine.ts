import { Moves, OrientationDirection } from "../CalculateOrientation/types";
import { Coordinate, OrientationFunction } from "../CreateWorld/types";
import {
    convertMovesArray,
    getMoveFromString,
    getOrientationFromString,
    isCoordinateWithinBounds,
    isSomething
} from "../../utils/utils";
import calculateOrientation from "../CalculateOrientation/calculateOrientation";

export const orientationMap = new Map<OrientationDirection, OrientationFunction>([
    [ OrientationDirection.West, ({ x, y }) => ({ x: x - 1, y }) ],
    [ OrientationDirection.East, ({ x, y }) => ({ x: x + 1, y }) ],
    [ OrientationDirection.South, ({ x, y }) => ({ x, y: y - 1 }) ],
    [ OrientationDirection.North, ({ x, y }) => ({ x, y: y + 1 }) ]
]);

export function movingInMars(orientation: OrientationDirection, coord: Coordinate, cols: number, rows: number) {
    const moveFunction = orientationMap.get(orientation);

    if (!moveFunction || coord == null) {
        return
    }

    const newLocation = moveFunction(coord);

    if (isCoordinateWithinBounds(newLocation, cols, rows)) {
        return newLocation;
    } else {
        console.log(`(${coord.x}, ${coord.y}, ${orientation}) LOST`);
        return
    }
}

export function updateRobot(x: number, y: number, orientation: string, seriesOfMoves: Array<string>, cols: number, rows: number) {
    const initialCoordinates: Coordinate = { x, y }
    let location: Coordinate | undefined = { x, y };

    const mappedMoves: (Moves | undefined | null)[] = convertMovesArray(seriesOfMoves).filter(isSomething)
    let currentOrientation = getOrientationFromString(orientation);

    if (currentOrientation == null) {
        throw new Error('Invalid orientation')
    }


    mappedMoves.map((i, index) => {
        if (i == null) return
        const move = getMoveFromString(i)

        if (currentOrientation == null || !move) {
            throw new Error('Invalid orientation')
        }
        if (index === 0) {
            currentOrientation = calculateOrientation(currentOrientation, move)
            if (i === Moves.Forward) {
                location = movingInMars(currentOrientation, initialCoordinates, cols, rows)
            }
        } else {
            currentOrientation = calculateOrientation(currentOrientation, move)
            if (i === Moves.Forward && location) location = movingInMars(currentOrientation, location, cols, rows)
            if (location && index === mappedMoves.length - 1) {
                console.log(`(${location.x}, ${location.y}, ${currentOrientation})`)
                return;
            }
        }
    })
}