const chatBubbles = document.querySelectorAll(".chat-bubble");

function checkScroll() {
  chatBubbles.forEach((bubble) => {
    const bubbleTop = bubble.getBoundingClientRect().top;
    if (bubbleTop < window.innerHeight * 0.8) {
      bubble.style.opacity = 1;
      bubble.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", checkScroll);



//  // Define the container element and its properties
//  var container = document.getElementById('container');
//  container.style.width = '100%';
//  container.style.height = '100%';
//  container.style.position = 'absolute';
//  container.style.top = 0;
//  container.style.left = 0;
//  container.style.background = '#000';

//  // Define the properties of the lines
//  var numLines = 20;
//  var lineLength = 100;
//  var lineWidth = 2;
//  var lineSpacing = 20;
//  var lineColor = '#fff';

//  // Define the properties of the animation
//  var duration = 5000;
//  var delay = 500;
//  var easing = 'easeInOutSine';

//  // Create an array to store the line elements
//  var lines = [];

//  // Generate the lines and add them to the container
//  for (var i = 0; i < numLines; i++) {
//    var line = document.createElement('div');
//    line.classList.add('line');
//    line.style.height = lineWidth + 'px';
//    line.style.width = lineLength + 'px';
//    line.style.background = lineColor;
//    line.style.position = 'absolute';
//    line.style.transformOrigin = '0 50%';
//    line.style.left = (lineSpacing * i) + 'px';
//    line.style.top = '50%';
//    container.appendChild(line);
//    lines.push(line);
//  }

//  // Create the animation using Anime.js
//  anime.timeline({loop: true})
//    .add({
//      targets: lines,
//      scaleX: 0,
//      duration: duration,
//      easing: easing
//    })
//    .add({
//      targets: lines,
//      rotate: 180,
//      duration: duration,
//      delay: delay,
//      easing: easing
//    })
//    .add({
//      targets: lines,
//      scaleX: 1,
//      duration: duration,
//      easing: easing
//    })
//    .add({
//      targets: lines,
//      rotate: 360,
//      duration: duration,
//      easing: easing
//    });