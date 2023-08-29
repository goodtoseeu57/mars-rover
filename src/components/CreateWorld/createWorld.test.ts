import { Factory } from "fishery";
import { createTheWorld } from "./createWorld"
import { Coordinate } from "./types";

const targetWorld = [
    [
        { x: 0, y: 8 }, { x: 1, y: 8 }, { x: 2, y: 8 }, { x: 3, y: 8 }, { x: 4, y: 8 }
    ],
    [
        { x: 0, y: 7 }, { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 4, y: 7 }
    ],
    [
        { x: 0, y: 6 }, { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 3, y: 6 }, { x: 4, y: 6 }
    ],
    [
        { x: 0, y: 5 }, { x: 1, y: 5 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }
    ],
    [
        { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }
    ],
    [
        { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 4, y: 3 }
    ],
    [
        { x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }
    ],
    [
        { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }
    ],
    [
        { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }
    ]
];

const generatedTargetWorld = (cols: number, rows: number) => Factory.define<Array<Array<Coordinate>>>(() => {
    cols = cols + 1
    rows = rows + 1
    const targetArray = Array.from({ length: rows }, (_, rowIndex) =>
        Array.from({ length: cols }, (_, colIndex) => ({
            x: colIndex,
            y: rows - 1 - rowIndex,
        }))
    );

    return targetArray;
})

describe('Tests the mars world creation', () => {
    it('should return a 4*8 grid', () => {
        expect(createTheWorld(4, 8)).toEqual(targetWorld)
    })

    it('should return a 12*20 grid', () => {
        expect(createTheWorld(12, 20)).toEqual(generatedTargetWorld(12, 20).build())
    })

    it('should return (0,0) as south-west corner of the grid', () => {
        console.table(createTheWorld(12, 20))
        expect(createTheWorld(12, 20)[20][0]).toEqual({ x: 0, y: 0 })
    })

    it('should create a 30*30 grid', () => {
        console.table(createTheWorld(30, 30))
        expect(createTheWorld(30, 30)).toEqual(generatedTargetWorld(30, 30).build())
    })


})