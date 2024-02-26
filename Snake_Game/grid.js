import { GRID_SIZE } from "./constants.js";

export function getRandomPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
}

export function outsideGrid(snake) {
  return (
    snake.x > GRID_SIZE || snake.y > GRID_SIZE || snake.x < 1 || snake.y < 1
  );
}
