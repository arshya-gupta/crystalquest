console.log("Hello");

//Variables
const character = document.querySelector('.character');
const moveLeftButton = document.querySelector('#move-left-button');
const moveRightButton = document.querySelector('#move-right-button');
const moveUpButton = document.querySelector('#move-up-button');
const moveDownButton = document.querySelector('#move-down-button');
let currentBottom = parseInt(getComputedStyle(character).bottom);
let currentLeft = parseInt(getComputedStyle(character).left);

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

//platform collision
const blocks = [
    document.getElementById('plat_1'),
    document.getElementById('plat_2'),
    document.getElementById('plat_3'),
  ];
  
  function checkCollision(block) {
    const characterRect = character.getBoundingClientRect();
    const blockRect = block.getBoundingClientRect();
    const offset = 5;
  
    return !(
      (characterRect.bottom - offset) < blockRect.top ||
      (characterRect.top + offset) > blockRect.bottom ||
      (characterRect.right - offset) < blockRect.left ||
      (characterRect.left + offset) > blockRect.right
    );
  }
  
  function moveCharacter(event) {
    const key = event.key;
    const oldTop = character.offsetTop;
    const oldLeft = character.offsetLeft;
    const offset = 10;
  
    switch (key) {
      case 'ArrowUp':
        character.style.top = (oldTop - offset) + 'px';
        if (blocks.some(block => checkCollision(block))) {
          character.style.top = oldTop + 'px';
        }
        break;
      case 'ArrowDown':
        character.style.top = (oldTop + offset) + 'px';
        if (blocks.some(block => checkCollision(block))) {
          character.style.top = oldTop + 'px';
        }
        break;
      case 'ArrowLeft':
        character.style.left = (oldLeft - offset) + 'px';
        break;
      case 'ArrowRight':
        character.style.left = (oldLeft + offset) + 'px';
        break;
    }
  }
  
  // add event listener for arrow key presses
  document.addEventListener('keydown', moveCharacter);

//   Inventory system??
// This creates an empty array to store the inventory items
const items = [];

// This function takes in a name and a quantity and adds the item to the inventory
function addItem(name, quantity) {
  // This searches the array for an item with the same name
  const item = items.find(i => i.name === name);
  // If the item already exists, it increases the quantity
  if (item) {
    item.quantity += quantity;
  // If the item doesn't exist, it adds a new item to the array
  } else {
    items.push({ name, quantity });
  }
  // This updates the HTML to display the current inventory
  renderItems();
}

// This function takes in a name and a quantity and removes the item from the inventory
function removeItem(name, quantity) {
  // This searches the array for an item with the same name
  const item = items.find(i => i.name === name);
  // If the item exists, it decreases the quantity
  if (item) {
    item.quantity -= quantity;
    // If the quantity is now 0 or less, it removes the item from the array
    if (item.quantity <= 0) {
      const index = items.indexOf(item);
      items.splice(index, 1);
    }
    // This updates the HTML to display the current inventory
    renderItems();
  }
}

// This function updates the HTML to display the current inventory
function renderItems() {
  // This gets the <ul> element that will contain the inventory items
  const itemsList = document.getElementById("items");
  // This clears the <ul> element of any previous items
  itemsList.innerHTML = "";
  // This adds a new <li> element for each item in the inventory
  items.forEach(item => {
    const li = document.createElement("li");
    li.classList.add("item");
    // This adds the item name as a <span> element
    const nameSpan = document.createElement("span");
    nameSpan.innerText = item.name;
    // This adds the item quantity as a <span> element
    const quantitySpan = document.createElement("span");
    quantitySpan.innerText = item.quantity;
    // This adds both <span> elements to the <li> element
    li.appendChild(nameSpan);
    li.appendChild(quantitySpan);
    // This adds the <li> element to the <ul> element
    itemsList.appendChild(li);
  });
}

// This adds an event listener to the "Add Apple" button
document.getElementById("add-apple").addEventListener("click", () => {
  addItem("Apple", 1);
});

// This adds an event listener to the "Add Banana" button
document.getElementById("add-banana").addEventListener("click", () => {
  addItem("Banana", 1);
});

// This adds an event listener to the "Remove Apple" button
document.getElementById("remove-apple").addEventListener("click", () => {
  removeItem("Apple", 1);
});

// This adds an event listener to the "Remove Banana" button
document.getElementById("remove-banana").addEventListener("click", () => {
  removeItem("Banana", 1)});