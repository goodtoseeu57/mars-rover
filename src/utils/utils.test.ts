import { isCoordinateWithinBounds } from "./utils";

describe('isCoordinateWithinBounds', () => {
  it('should return true for coordinates within the bounds', () => {
    expect(isCoordinateWithinBounds({ x: 2, y: 3 }, 5, 5)).toBe(true);
    expect(isCoordinateWithinBounds({ x: 0, y: 0 }, 5, 5)).toBe(true);
  });

  it('should return false for coordinates outside the bounds', () => {
    expect(isCoordinateWithinBounds({ x: 6, y: 3 }, 5, 5)).toBe(false);
    expect(isCoordinateWithinBounds({ x: 2, y: 6 }, 5, 5)).toBe(false);
    expect(isCoordinateWithinBounds({ x: -1, y: 3 }, 5, 5)).toBe(false);
    expect(isCoordinateWithinBounds({ x: 2, y: -1 }, 5, 5)).toBe(false);
  });
});