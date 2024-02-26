import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection, SNAKE_SPEED } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from './grid.js'

let lastRenderTime = 0, gameOver = false;
let gameBoard = document.getElementById("game-board");

function main(currentTime){
    if(gameOver){
        if(confirm("You Lose! Press OK to play again")){
            window.location = "/";
        }
        return;
    }
    let secondsSinceLastRender = (currentTime - lastRenderTime) / 1000; 
    window.requestAnimationFrame(main);
    if(secondsSinceLastRender < (1 / SNAKE_SPEED)){
        return;
    }
    console.log("Render");
    lastRenderTime = currentTime;

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
