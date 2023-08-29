# Mars Rover

A program that takes in commands and moves one or more robots around Mars.

## Description

This project models a world as a grid with dimensions m x n. It reads input data, updates robots, and outputs the final
states of the robots. Each robot is defined by its position (x, y) and orientation (N, E, S, W). The robots can perform
three actions: move forward (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R). If a robot moves off
the grid, it is marked as 'lost,' and its last valid position and orientation are recorded. The grid is defined with (
0,0) as the southwest corner, and moving east increase the x-coordinate while moving north increases the
y-coordinate.

## Documentation

Code is organized in  `/components` folder the program is divided into `CreateWorld` `MovingMachine`
and `CalculateOrientation` sections.

On `utils` folder you can find functions that can work as helpers e.g a `function` that _converts a string value to its
corresponding enum value_.

The main program runs on `index.ts`. `/Marsworld` and `marsWorld` function serves as the starting point for the
functional logic.
logic.

The input for the program takes the following form separated by lines

`4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF`

1. The first line indicates the m and n of the grid
2. The remaining lines indicate the robot's movements, with parentheses denoting the initial position and orientation.
3. Each line is related to one Robot.

## Quickstart

```
docker run -it <name of your image > /bin/bash 
```

This will open an interactive terminal, and you can run the CLI app like below

```
npx ts-node src/index.ts run -i "4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF" 
```

i stands for input, and then you can pass your input like that

```
4 8

(2, 3, E) LFRFF

(0, 2, N) FFLFRFF
```

## Running tests

`npm run test `

or installing the Jest plugin in vs code and run them individually

https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner



