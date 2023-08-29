/**
 * Represents the cardinal directions of orientation.
 *
 * @property {string} North - Represents the North direction.
 * @property {string} East - Represents the East direction.
 * @property {string} South - Represents the South direction.
 * @property {string} West - Represents the West direction.
 */
export enum OrientationDirection {
    North = "N",
    East = "E",
    South = "S",
    West = "W"
}

/**
 * Represents different movement commands.
 *
 * @readonly
 * @property {string} Forward - Represents the forward movement command.
 * @property {string} Right - Represents the command for a right turn by 90 degrees.
 * @property {string} Left - Represents the command for a left turn by 90 degrees.
 */
export enum Moves {
    Forward = "F",
    Right = "R",
    Left = "L"
}