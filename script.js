console.log("Hello World");

const background = document.querySelector('.background-image');
const heading = document.querySelector('.heading');

// Zoom in the background image after a 2-second delay
setTimeout(() => {
  background.classList.add('zoomed');
},0);

// Fade in the heading after a 4-second delay
setTimeout(() => {
  heading.classList.add('visible');
}, 2000);
