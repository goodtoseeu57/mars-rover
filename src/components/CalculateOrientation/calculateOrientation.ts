import { Moves, OrientationDirection } from "./types";

/**
 * Calculates the new orientation based on the current orientation and rotation command.
 *
 * @param {OrientationDirection} currentOrientation - The current orientation of the system.
 * @param {Moves} rotateTo - The rotation command to apply.
 * @returns {OrientationDirection} The new orientation after applying the rotation.
 */
 export default function calculateOrientation(currentOrientation: OrientationDirection, rotateTo: Moves): OrientationDirection {
    if (rotateTo === Moves.Forward) return currentOrientation;
    if (currentOrientation === OrientationDirection.North && rotateTo === Moves.Right) return OrientationDirection.East;
    if (currentOrientation === OrientationDirection.North && rotateTo === Moves.Left) return OrientationDirection.West;
    if (currentOrientation === OrientationDirection.East && rotateTo === Moves.Right) return OrientationDirection.South;
    if (currentOrientation === OrientationDirection.East && rotateTo === Moves.Left) return OrientationDirection.North;
    if (currentOrientation === OrientationDirection.West && rotateTo === Moves.Right) return OrientationDirection.North;
    if (currentOrientation === OrientationDirection.West && rotateTo === Moves.Left) return OrientationDirection.South;
    if (currentOrientation === OrientationDirection.South && rotateTo === Moves.Right) return OrientationDirection.West;
    if (currentOrientation === OrientationDirection.South && rotateTo === Moves.Left) return OrientationDirection.East;

    throw new Error("Unhandled case in calculateOrientation");
}