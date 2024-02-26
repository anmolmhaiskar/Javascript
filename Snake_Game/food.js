import {getRandomPosition} from "./grid.js";
import {onSnake, expandSnake} from "./snake.js";

let food = { x: 10, y: 16 };
const EXPANSION_RATE = 3;

export function update() {
  console.log("Update Food.,..", food);
  if(onSnake(food)){
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }  
}

export function draw(gameBoard) {
  // console.log("Draw Food.,..");
  const foodElement = document.createElement("div");
  foodElement.classList.add("food");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition(){
    let newFoodPosition;
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = getRandomPosition();
    }
    return newFoodPosition;
}