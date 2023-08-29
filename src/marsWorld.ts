import { createTheWorld } from "./components/CreateWorld/createWorld";
import { updateRobot } from "./components/MovingMachine/movingMachine";
import { splitStringToArray } from "./utils/utils";

export function marsWorld(input: string) {
    const lines = input.split('\n');

    const [ columns, rows ] = lines[0].split(' ').map(Number);

    createTheWorld(columns, rows);

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        const regexPattern = /\((\d+), (\d+), ([NESW])\) (.+)/;
        const match = line.match(regexPattern);

        if (!match) throw Error(`Line ${i} does not match the expected format.`)
        const [ , x, y, direction, moveInstructions ] = match
        const moves = splitStringToArray(moveInstructions);

        const startX = parseInt(x);
        const startY = parseInt(y);


        updateRobot(startX, startY, direction, moves, columns, rows);
    }
}