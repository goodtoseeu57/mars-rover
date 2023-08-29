import { Moves, OrientationDirection } from "../components/CalculateOrientation/types";
import { Coordinate } from "../components/CreateWorld/types";

/**
 * Constructs an array of strings using the characters from the input string.
 *
 * @param {string} input - The input string to extract characters from.
 * @returns {Array<string>} An array of strings constructed from the characters of the input string.
 */
export function splitStringToArray(input: string): Array<string> {
    return input.split('');
}

/**
 * Returns an array of key-value pairs from an object.
 *
 * @param {object} object - The input object.
 * @returns {Array<[key, value]>} An array of key-value pairs from the input object.
 */
export function objectEntries<O extends object,
    K = keyof O,
    V = O extends { [key: string]: infer L } ? L : never>(object: O): Array<[ K, V ]> {
    return Object.entries(object) as unknown as Array<[ K, V ]>
}

/**
 * Converts a string value to its corresponding enum value.
 *
 * @param {object} type - The enum type.
 * @param {string} value - The string value to convert.
 * @returns {any} The corresponding enum value or undefined if not found.
 */
export const getEnumValueFromString = <T extends object>(type: T, value: string): T[keyof T] | undefined => {
    for (const [ typeKey, typeValue ] of objectEntries(type)) {
        if (typeValue === value) {
            return type[typeKey]
        }
    }

    return undefined
}


export function getOrientationFromString(orientationStr: string): OrientationDirection | null | undefined {
    const orientationValues = Object.values(OrientationDirection);
    for (const orientation of orientationValues) {
        if (orientation === orientationStr) {
            return orientation as OrientationDirection;
        }
    }
    return null;
}

export function getMoveFromString(moveStr: string): Moves | null {
    const moveValues = Object.values(Moves);
    for (const move of moveValues) {
        if (move === moveStr) {
            return move as Moves;
        }
    }
    return null;
}


export function convertMovesArray(movesArray: string[]): (Moves | undefined | null)[] {
    return movesArray.map(moveStr => getEnumValueFromString(Moves, moveStr));
}

/**
 * Checks if a given coordinate is within the specified bounds.
 *
 * @param {Coordinate} coord - The coordinate to check.
 * @param {number} cols - The number of columns (width).
 * @param {number} rows - The number of rows (height).
 * @returns {boolean} True if the coordinate is within bounds, false otherwise.
 */
export function isCoordinateWithinBounds(coord: Coordinate, cols: number, rows: number): boolean {
    cols = cols + 1
    rows = rows + 1
    return coord.x >= 0 && coord.x < cols && coord.y >= 0 && coord.y < rows;
}

/**
 * Checks if a value is not null or undefined.
 *
 * @param {any} maybeThing - The value to check.
 * @returns {boolean} True if the value is not null or undefined, false otherwise.
 */
export const isSomething = <T>(maybeThing: T | null | undefined): maybeThing is T => maybeThing !== null && maybeThing !== undefined

