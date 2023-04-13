console.log("Hello World");		

//Variables
const character = document.querySelector('.character');
const moveLeftButton = document.querySelector('#move-left-button');
const moveRightButton = document.querySelector('#move-right-button');
const moveUpButton = document.querySelector('#move-up-button');
const moveDownButton = document.querySelector('#move-down-button');
let currentBottom = parseInt(getComputedStyle(character).bottom);
let currentLeft = parseInt(getComputedStyle(character).left);

// const platform = document.getElementById('plat_1');
// const gravity = 0.5; // Acceleration due to gravity
// let vy = 0; // Vertical velocity

//Character Movement
let characterPosition = 0;

function moveCharacterLeft() {
  currentLeft -= 10;
  character.style.left = currentLeft + 'px';
  console.log("Hi");
  ///checkCollision();
}

function moveCharacterRight() {
  currentLeft += 10;
  character.style.left = currentLeft + 'px';
  //checkCollision();
}

function moveCharacterUp() {
  currentBottom += 10;
  character.style.bottom = currentBottom + 'px';
  //checkCollision();
}

function moveCharacterDown() {
  currentBottom -= 10;
  character.style.bottom = currentBottom + 'px';
  // checkCollision();
}

moveLeftButton.addEventListener('click', moveCharacterLeft);
moveRightButton.addEventListener('click', moveCharacterRight);
moveUpButton.addEventListener('click', moveCharacterUp);
moveDownButton.addEventListener('click', moveCharacterDown);


//Dialogue Box
const dialogueBox = document.getElementById('dialogue-box');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  if (dialogueBox.style.display === 'none') {
    dialogueBox.style.display = 'block';
    spellOutText('Hello World!');
    // console.log("Hello");
  } else {
    dialogueBox.style.display = 'none';
    console.log("Hello");
  }
});

function spellOutText(text) {
  let index = 0;
  const interval = setInterval(() => {
    dialogueBox.innerHTML = text.substring(0, index);
    index++;
    if (index > text.length) {
      clearInterval(interval);
    }
  }, 50);
}

// function checkCollision() {
//   const playerRect = character.getBoundingClientRect();
//   const platformRect = platform.getBoundingClientRect();

//   // Check for collision
//   if (playerRect.bottom >= platformRect.top && 
//       playerRect.top <= platformRect.bottom && 
//       playerRect.right >= platformRect.left && 
//       playerRect.left <= platformRect.right) {
    
//     // Collision detected, move player back to previous position
//     character.style.top = character.dataset.prevTop;
//     character.style.left = character.dataset.prevLeft;
    
//     // Reset vertical velocity
//     vy = 0;
//   }
// }

// Store previous position of player
// character.dataset.prevTop = character.style.top;
// character.dataset.prevLeft = character.style.left;

// // Move player using arrow keys
// document.addEventListener('keydown', function(event) {
//   if (event.code === 'ArrowUp') {
//     vy = -10; // Jump
//   } else if (event.code === 'ArrowLeft') {
//     character.style.left = parseInt(character.style.left) - 10 + 'px';
//     checkCollision();
//   } else if (event.code === 'ArrowRight') {
//     character.style.left = parseInt(character.style.left) + 10 + 'px';
//     checkCollision();
//   }
// });

// // Update player position every frame
// function update() {
//   // Apply gravity
//   vy += gravity;
  
//   // Update vertical position
//   const prevTop = parseInt(character.style.top);
//   character.style.top = prevTop + vy + 'px';
  
//   // Check for collisions
//   checkCollision();
  
//   // Store previous position of player
//   character.dataset.prevTop = prevTop + 'px';
  
//   requestAnimationFrame(update);
// }

// // Start the game loop
// requestAnimationFrame(update);

// const minigamePopup = document.getElementById('minigame-popup');
// const startGameButton = document.getElementById('start-game');
// const scoreElement = document.getElementById('score');
// const timerElement = document.getElementById('timer');

// //Canvas setup variables
// const canvas = document.getElementById('cnvs');
// const cnvs = canvas.getContext('2d');
// const dpr = window.devicePixelRatio || 1;x
// //canvas.width = window.innerWidth * dpr;
// //canvas.height = window.innerHeight * dpr;
// ctx.scale(dpr, dpr);
// const centerX = canvas.width / 2;
// const centerY = canvas.height / 2;
// const radius = 80;
// const quadrantWidth = radius / 2;

//Collision and mini game pop up
// let collided = false;
// let score = 0;

// function checkCollision() {
//   const moveableCharacter = character.getBoundingClientRect();
//   const stationaryRect = stationaryObject.getBoundingClientRect();

//   const isColliding = !(
//     moveableCharacter.bottom < stationaryRect.top ||
//     moveableCharacter.top > stationaryRect.bottom ||
//     moveableCharacter.right < stationaryRect.left ||
//     moveableCharacter.left > stationaryRect.right
//   );

//   if (isColliding) {
//     collided = true;
//     showMinigamePopup();
//   } else {
//     collided = false;
//     hideMinigamePopup();
//   }
// }

// function showMinigamePopup() {
//   minigamePopup.style.display = 'block';
//   startGameButton.addEventListener('click', startGame);
// }

// function startGame() {
//   score = 0;
//   scoreElement.innerHTML = 'Score: ' + score;
//   minigamePopup.style.display = 'none';
  
//   let timeLeft = 10;
//   timerElement.innerHTML = timeLeft;
  
//   const timer = setInterval(function() {
//     timeLeft--;
//     timerElement.innerHTML = timeLeft;
    
//     if (timeLeft == 0) {
//       clearInterval(timer);
//       showGameOverPopup();
//     }
//   }, 1000);
  
//   document.addEventListener('click', handleGameClick);
// }

// function handleGameClick() {
//   if (!checkCollision()) {
//     minigamePopup.style.display = 'none';
//     document.removeEventListener('click', handleGameClick);
//   }
//   else {
//     increaseScore();
//   }
// }

// function increaseScore() {
//   score++;
//   scoreElement.innerHTML = 'Score: ' + score;
// }

// function showGameOverPopup() {
//   const gameOverPopup = document.createElement('div');
//   gameOverPopup.id = 'game-over-popup';
//   gameOverPopup.innerHTML = '<h2>Game Over</h2><p>Your score: ' + score + '</p><button id="play-again">Play Again</button>';
//   document.body.appendChild(gameOverPopup);
//   const playAgainButton = document.getElementById('play-again');
//   playAgainButton.addEventListener('click', function() {
//     gameOverPopup.remove();
//     startGame();
//   });
// }

// function checkForCollisions() {
//   if (checkCollision()) {
//     collided = true;
//     showMinigamePopup();
//   } else {
//     collided = false;
//   }
// }

// setInterval(checkForCollisions, 100);

// function hideMinigamePopup() {
//   minigamePopup.style.display = 'none';
// }

// //Map
// const canvas = document.getElementById('cnvs');
// const ctx = canvas.getContext('2d');
  
// // Define the circle parameters
//  const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2;
//   const radius = Math.min(canvas.width, canvas.height) * 0.4;
//   const quadrantWidth = 50;

//   // Register a mousemove event listener for the canvas
//   canvas.addEventListener('mousemove', function(event) {
//     // Get the mouse coordinates relative to the canvas
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;

//     // Determine if the mouse is over the quadrant of interest
//     const distanceFromCenter = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
//     if (distanceFromCenter <= radius && mouseX >= centerX && mouseY <= centerY) {
//       // Change the style of the quadrant to indicate hover state
//       ctx.fillStyle = 'red';
//       ctx.fillRect(centerX, centerY - quadrantWidth, quadrantWidth, quadrantWidth);
//     } else {
//       // Reset the style of the quadrant
//       ctx.fillStyle = 'black';
//       ctx.fillRect(centerX, centerY - quadrantWidth, quadrantWidth, quadrantWidth);
//     }
//   });

//   // Draw the circle and its quadrants
//   ctx.beginPath();
//   ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
//   ctx.strokeStyle = 'black';
//   ctx.stroke();

//   ctx.fillStyle = 'black';
//   ctx.fillRect(centerX, centerY - quadrantWidth, quadrantWidth, quadrantWidth);
//   ctx.fillRect(centerX - quadrantWidth, centerY - quadrantWidth, quadrantWidth, quadrantWidth);
//   ctx.fillRect(centerX - quadrantWidth, centerY, quadrantWidth, quadrantWidth);
//   ctx.fillRect(centerX, centerY, quadrantWidth, quadrantWidth);