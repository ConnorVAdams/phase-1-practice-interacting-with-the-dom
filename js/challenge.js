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
    {  
        'data-num': 3,
        likes: 7,
    },
    {
        'data-num': 4,
        likes: 3,
    },
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
    // const buttons = [heart, plus, minus].forEach(button => button.toggleAttribute('disabled'));
};

// ! Define handleLike
//Pass in currentCount
const handleLike = () => {
    //Check for already liked number
    //If already liked
    debugger
    // if (checkInLikedNums()) {
    //     //Update likes value of numObj
    //     const alreadyLikedNumber = checkInLikedNums();
    //     console.log(alreadyLikedNumber)

        //Change number of likes in the DOM
    // } else {
    //     //Add new numObj to [likedNums]
    //     // const newNumObj = {'data-num': currentCount, likes: 1}
    //     //     likedNums.push(newNumObj);
    //     //Add new <li> to <ul.list>
    // }
    
    
}

// ! Define checkInLikedNums
//Checks [likedNums] to see if liked number already exists as an element
const checkInLikedNums = () => {
    for (element of likedNums) {
        if (parseInt(element['data-num']) === currentCount) {
            return element;
        }
    }
    return false;
};




//     //Determine if currentCount exists in likedNums array
//     likedNums.forEach(element => {
//         //Goes through EACH element of the array to compare with currentCount
//         if (element['data-num'] !== currentCount) {
//             //Add new number Object to [likedNums]
//             const newNumObj = {'data-num': currentCount, likes: 1}
//             likedNums.push(newNumObj);
//             //Create an <li> associated with the liked number in the <ul.likes>
//             const newLikedNum = document.createElement('li');
//             //Target the <li> and update it to reflect initial like
//             newLikedNum.innerHTML = `${currentCount} has been liked <span>1</span> time`;
//             //Pass the value of currentCount to the data-num attribute in the newly created <li>
//             debugger
//             newLikedNum.setAttribute('data-num', `${currentCount}`);
//             //Initialize like count
//             newLikedNum.likes = 1;
//             //Append new li to the DOM
            
//         } else {
//             // let targetedSpan = document.querySelector(`.likesUl li[data-num='${currentCount}'] span`)
//             console.log('same')
//             // targetedSpan.textContent = parseInt(targetedSpan.textContent) + 1
//         };
//     })
// };

    //Pass in currentCount
    //Search likedNums Object for object with data-num === currentCount
    //If an li with data-num = currentCount already exists in <ul.class>
        //Modify that <li span> by + 1

//
// }

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
}

// ! Attach event handlers to clickable elements
minus.addEventListener('click', handleMinus);
plus.addEventListener('click', handlePlus);
heart.addEventListener('click', handleLike);
pause.addEventListener('click', handlePause);
submitBtn.addEventListener('click', handleSubmit)