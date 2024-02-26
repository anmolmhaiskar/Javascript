import { getInputDirection } from "./input.js";
export const SNAKE_SPEED = 5;
const snakeBody = [{ x: 10, y: 11 }];
let newSegments = 0;

export function update(){
    // console.log("Update Snake.,..");
    addNewSegments();
    const inputDirection = getInputDirection();
    for(let i = snakeBody.length-2; i>=0; i--){
        snakeBody[i+1] = {...snakeBody[i]};
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard){
    // console.log("Draw Snake.,..");
    snakeBody.forEach((segment, index) => {
        const snakeElement = document.createElement("div");
        snakeElement.classList.add("snake");
        if(index === 0){
            snakeElement.classList.add("snake-head");
        }
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        gameBoard.appendChild(snakeElement);
    });

}


export function onSnake(foodPosition, { ignoreHead=false}={}){
    return snakeBody.some((segment, index) => {
        if(ignoreHead && index===0) {
            return false;
        }
        return equalPositions(segment, foodPosition);
    });
}

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

export function expandSnake(EXPANSION_RATE) {
    newSegments += EXPANSION_RATE;
}

function addNewSegments(){
    for(let i=0; i<newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }
    newSegments = 0;
}

export function getSnakeHead(){
    return snakeBody[0];
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true });
}