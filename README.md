# Mars Rover

A program that takes in commands and moves one or more robots around Mars.

## Description

This project models a world as a grid with dimensions m x n. It reads input data, updates robots, and outputs the final
states of the robots. Each robot is defined by its position (x, y) and orientation (N, E, S, W). The robots can perform
three actions: move forward (F), rotate left by 90 degrees (L), or rotate right by 90 degrees (R). If a robot moves off
the grid, it is marked as 'lost,' and its last valid position and orientation are recorded. The grid is defined with (
0,0) as the south-west corner, and moving east increases the x-coordinate, while moving north increases the
y-coordinate.

## Documentation

The input takes the following form separated by lines

4 8
(2, 3, E) LFRFF
(0, 2, N) FFLFRFF

1. First line indicates the m and n of the grid
2. The remaining lines indicate the robot's movements, with parentheses denoting the initial position and orientation.
3. Each line is related with one Robot.

## Quickstart
```
docker run -it <name of your image > /bin/bash 
```
This will open an interactive terminal and you can run the cli app like below 

```
npx ts-node src/index.ts run -i "4 8\n(2, 3, E) LFRFF\n(0, 2, N) FFLFRFF" 
```

i stands for input and then you can pass you input like that

48
(2, 3, E) LFRFF 
(0, 2, N) FFLFRFF
