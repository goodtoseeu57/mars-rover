/**
 * @typeParam Coordinate - Represents a coordinate with x and y values.
 */
export type Coordinate = {
    x: number;
    y: number;
}

/**
 * @param {Coordinate} coordinate - The current coordinate.
 * @returns {Coordinate} The updated coordinate after applying the orientation change.
 */
export type OrientationFunction = (coordinate: Coordinate) => Coordinate;