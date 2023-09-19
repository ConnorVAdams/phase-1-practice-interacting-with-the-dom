// ! Assign variables to elements you might need to target
//Variables for clickable DOM elements
const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const pause = document.querySelector('#pause')

//Variables for global malleable values
let currentCount = parseInt(counter.textContent);
let paused = false;

const likedNumbers = [];
// const likesForCurrentCount = 

// ! Start timer and set intervals
//Increase the value of currentCount by 1 every second and update the DOM accordingly
setInterval(() => { 
    currentCount = currentCount + 1;
    counter.textContent = currentCount;
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
const handlePause = () => {
    //If counter is currently paused
    if (paused === false) {
        //Stop incrementing current count
        clearInterval(1);
        //Change state of paused global variable
        paused = true;
    //If counter is currently unpaused
    } else {
        //TODO Should I define this anonymous function?
        paused = false;
    }
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

// ! Attach event handlers to clickable elements
minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);