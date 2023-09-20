// ! Assign variables to elements you might need to target
//Variables for clickable DOM <buttons>
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');

//Likes <ul>
const likesUl = document.querySelector('.likes')

//Submit <form>
const submitForm = document.querySelector('form');
const submitBtn = document.querySelector('#submit');
const commentsDiv = document.querySelector('#list');

//Counter <h1>
const counter = document.querySelector('#counter');

//Variables for global malleable values
let currentCount = 0
let paused = false;

// ! Store liked numbers and their number of likes locally/globally
//{Liked numbers}
const likedNums = [
    ];

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
//Stop current count incrementing and toggle resume and pause
const handlePause = () => {
    if (!paused) {
        paused = true;
        pause.textContent = 'resume'
    } else {
        paused = false;
        pause.textContent = 'pause'
    };
    //Disable other buttons
    const buttons = [heart, plus, minus].forEach(button => button.toggleAttribute('disabled'));
};

const addNewLikedNum = () => {
    //Add new numObj to [likedNums]
    const newNumObj = {id: currentCount.toString(), likes: 0}
    likedNums.push(newNumObj);
    //Add new <li> to <ul.list>
    const newlyLikedNum = document.createElement('li');
    //Append it to <ul.likes>
    newlyLikedNum.id = newNumObj.id
    likesUl.appendChild(newlyLikedNum);
    //Return the new object for use in handleLike()
    return newNumObj;
};

// ! Define handleLike
//Pass in currentCount
const handleLike = () => {
    if (!checkInLikedNums()) {
        //Add new numObj if it if that number hasn't been liked yet
        addNewLikedNum()
    };
    //Capture the numObj associated with counter's current display
    let likedNum;
    likedNums.forEach(element => {
        if (element.id === currentCount.toString()) {
            likedNum = element;
        };
    });
    updateLikes(likedNum);
    updateDOM(likedNum);
};

// ! Define checkInLikedNums
//Checks [likedNums] to see if liked number already exists as an element
const checkInLikedNums = () => {
    for (element of likedNums) {
        if (parseInt(element.id) === currentCount) {
            return element;
        }
    }
    return false;
};

// ! Define updateLikes
const updateLikes = (likedNum) => {
    //Update number of likes
    likedNum.likes = likedNum.likes + 1;
    return likedNum;
};

// ! Define updateDOM
//Pass in likedNum ID and current likes
const updateDOM = (likedNum) => {
    //Find <li> containing targetedNum
    let targetedLiId = likedNum.id;
    let targetedLi = document.querySelector(`[id='${targetedLiId}']`)
    //Increase number in that <li span> by 1
    targetedLi.innerHTML = `${likedNum.id} has been liked <span>${likedNum.likes}</span> times`;
}

// ! Define handleSubmitComment
//Display comment in Comments <div>
const handleSubmit = (e) => {
    //Prevent form refresh
    e.preventDefault();
    //Capture form data
    const userInput = submitForm.querySelector('#comment-input').value;
    const newP = document.createElement('p');
    newP.textContent = userInput
    commentsDiv.appendChild(newP)
    submitForm.reset();
};

// ! Attach event handlers to clickable elements
minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);
heart.addEventListener('click', handleLike);
pause.addEventListener('click', handlePause);
submitBtn.addEventListener('click', handleSubmit);