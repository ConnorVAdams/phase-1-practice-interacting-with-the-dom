// ! Assign variables to elements you might need to target
//Variables for clickable DOM elements
const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');

//Variables for global malleable values
let currentCount = 0
let paused = false;

//TODO Counter and currentCount should both
//Increment when !paused
//Stop incrementing when paused === true

// ! Store liked numbers and their number of likes locally/globally
const likedNumbers = [];
// const likesForCurrentCount = 

// ! Start counter and set intervals
//Increase the value of currentCount by 1 every second and update the DOM accordingly
var setInterval = setInterval(() => { 
    if (!paused) {
        currentCount = currentCount + 1;
        counter.textContent = currentCount;
    }
}, 1000);

// ! Define event handlers
// ! Define handleMinus
//Pass in currentCount
const handleMinus = () => {
    //Decrease currentCount by 1
    currentCount = currentCount - 1;
    //Update the DOM
    counter.textContent = currentCount;
};

// ! Define handlePlus
//Pass in currentCount
const handlePlus = () => {
    //Increase currentCount by 1
    currentCount = currentCount + 1;
    //Update the DOM
    counter.textContent = currentCount;
};

// ! Define handlePause
//Disable the functionality of the minus, plus, and heart and pause counter
//Stop current count incrementing
const handlePause = () => {
    if (!paused) {
        paused = true;
    } else paused = false;
    //Disable other buttons
    const buttons = [heart, plus, minus].forEach(button => button.toggleAttribute('disabled'));
};

// ! Define handleLike
//Pass in currentCount
//If an li with data-num = currentCount already exists in <ul.class>
    //Update that <li span> by + 1
//Else 
    //Create an <li> associated with the liked number in the <ul.likes>
    //Pass the value of currentCount to the data-num attribute in the newly created <li>
    //Target the <li span> and update it to reflect an addition of one like
    //Append new li to the DOM
//

// ! Define handleSubmitComment
//Display comment in Comments <div>

// ! Attach event handlers to clickable elements
minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);
pause.addEventListener('click', handlePause);