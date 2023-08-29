import { Coordinate } from "./types";

/**
 *
 * @param cols - the input of the cols in Mars world
 * @param rows - the input of the rows in Mars world
 * @returns world (Array<Array<Coordinate>>) - the Mars world based on the above params
 */

export function createTheWorld(cols: number, rows: number): Array<Array<Coordinate>> {
    const world: Array<Array<Coordinate>> = [];
    cols = cols + 1
    rows = rows + 1
    for (let y = rows - 1; y >= 0; y--) {
        const innerArray: Array<Coordinate> = [];
        for (let x = 0; x < cols; x++) {
            innerArray.push({ x, y });
        }
        world.push(innerArray);
    }
    console.table(world)
    return world;
}