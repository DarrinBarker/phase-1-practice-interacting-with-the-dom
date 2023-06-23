// // Displays counter on Screen starting from 0
// let counter = 0;
// const counterDisplay = document.getElementById('counter');

// // Make sure the counters text gets updated
// function updateCounter() {
//   counterDisplay.textContent = counter;
// }

// // Adds a second on the counter when plus is clicked
// function incrementCounter() {
//   counter++;
//   updateCounter();
// }
// // Takes a second off of the counter when minus is clicked
// function decrementCounter() {
//   counter--;
//   updateCounter();
// }


// // // Increases the counter every second
// let timer = setInterval(incrementCounter, 1000);

// // Pause Functionaility 
// let pauseButton = document.getElementById('pause');
// let buttons = document.querySelectorAll('button:not(#pause)');
// let isPaused = false;
// let resumeButton = document.getElementById('pause');

// pauseButton.addEventListener('click', function() {
//   if (isPaused) {
//     isPaused = false;
//     pauseButton.textContent = 'pause';
//     buttons.forEach(function(button) {
//       button.disabled = false;
//     });
//   } else {
//     isPaused = true;
//     clearInterval(timer);
//     pauseButton.textContent = 'resume';
//     buttons.forEach(function(button) {
//       button.disabled = true;
//     });
//   }
// });



// resumeButton.addEventListener('click', function() {
//   if (isPaused) {
//     timer = setInterval(updateCounter);
//     isPaused = true;
//     pauseButton.disabled = true;
//     resumeButton.disabled = false;
//     buttons.forEach(function(button) {
//       button.disabled = false;
//     });
//   }
// });



// // setTimeout(function(){
// //   clearInterval(pauseButton);
// //   console.log(pauseButton)
// // }
// // )

// // Functionailty of the heart button / Allows 
// function likeCounter(){
//   const numberLikes = document.querySelector('.likes')
//   console.log(numberLikes)
//   const like = document.createElement('li')
//   like.innerText = ` ${counter} has been liked 1 time `
//   console.log("testing: ", like)
//   numberLikes.appendChild(like)
// }

// const minus = document.getElementById('minus')
// const plus = document.getElementById('plus')
// const heart = document.getElementById('heart')

// minus.addEventListener('click', decrementCounter)
// plus.addEventListener('click', incrementCounter)
// heart.addEventListener('click', likeCounter)

// // Comment Functionality 

// // Grabbing the form ID
// let commentForm = document.getElementById('comment-form');
// // Grabbing the input ID
// let commentInput = document.getElementById('comment-input');
// // Grabbing the container ID
// let commentsContainer = document.getElementById('list')

// // Adding a submit event listener for when a user comments into box
// commentForm.addEventListener('submit' , function(e) {
//   e.preventDefault();
//   let comment = commentInput.value;
//   let commentParagraph = document.createElement('p');
//   commentParagraph.textContent = comment;
//   commentsContainer.appendChild(commentParagraph);
//   commentInput.value = '';
// });


// let timer = 0;
// const timerDisplay = document.getElementById('counter').innerText;
// console.log("When declared: ", timerDisplay)
// let timerInterval;
// let isPaused = false;

// function updateTimer() {
//   timerDisplay.textContent = timer;
// }

// function startTimer() {
//   timerInterval = setInterval(function() {
//     if (!isPaused) {
//       timer++;
//       updateTimer();
//     }
//   }, 1000);
// }

// function stopTimer() {
//   clearInterval(timerInterval);
// }


// document.getElementById('start').addEventListener('click', startTimer);
// document.getElementById('stop').addEventListener('click', stopTimer);
// document.getElementById('pause').addEventListener('click', function() {
  
//   let pauseButton = document.getElementById('pause');
//   if (pauseButton) {
//     pauseButton.textContent = 'Resume';
//     document.getElementById('plus').disabled = true;
//     document.getElementById('minus').disabled = true;
//     document.getElementById('heart').disabled = true;
//     document.getElementById('submit').disabled = true;
//     // document.getElementById('start-btn').disabled = true;
//     // document.getElementById('stop-btn').disabled = true;
//   } else {
//     pauseButton.textContent = 'Pause';
//     document.getElementById('plus').disabled = false;
//     document.getElementById('minus').disabled = false;
//     document.getElementById('heart').disabled = false;
//     document.getElementById('submit').disabled = false;
//     // document.getElementById('start-btn').disabled = false;
//     // document.getElementById('stop-btn').disabled = false;
//   }
// });

// Displays counter on Screen starting from 0
let counter = 0;
const counterDisplay = document.getElementById('counter');

// Make sure the counters text gets updated
function updateCounter() {
  counterDisplay.textContent = counter;
}

// Adds a second on the counter when plus is clicked
function incrementCounter() {
  counter++;
  updateCounter();
}

// Takes a second off of the counter when minus is clicked
function decrementCounter() {
  counter--;
  updateCounter();
}

// Increases the counter every second
let timer = setInterval(incrementCounter, 1000);

// Pause Functionality
let pauseButton = document.getElementById('pause');
let buttons = document.querySelectorAll('button:not(#pause)');
let isPaused = false;

pauseButton.addEventListener('click', function() {
  if (!isPaused) {
    isPaused = true;
    clearInterval(timer);
    pauseButton.textContent = 'resume';
    buttons.forEach(function(button) {
      button.disabled = true;
    });
  } else {
    isPaused = false;
    timer = setInterval(incrementCounter, 1000);
    pauseButton.textContent = 'pause';
    buttons.forEach(function(button) {
      button.disabled = false;
    });
  }
});

// Functionality of the heart button
function likeCounter() {
  const numberLikes = document.querySelector('.likes');
  const like = document.createElement('li');
  like.innerText = `${counter} has been liked 1 time`;
  numberLikes.appendChild(like);
}

const heart = document.getElementById('heart');
heart.addEventListener('click', likeCounter);

// Comment Functionality
let commentForm = document.getElementById('comment-form');
let commentInput = document.getElementById('comment-input');
let commentsContainer = document.getElementById('list');

commentForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let comment = commentInput.value;
  let commentParagraph = document.createElement('p');
  commentParagraph.textContent = comment;
  commentsContainer.appendChild(commentParagraph);
  commentInput.value = '';
});

// Manual Counter Increment and Decrement
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', decrementCounter);
plus.addEventListener('click', incrementCounter);
