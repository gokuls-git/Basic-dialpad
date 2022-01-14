



const digit = document.querySelectorAll(".key"); // Gets all the tags with classname as 'key'
let number = document.querySelector(".number"); // gets the tag with classname 'number'
let toBeDialed = number.innerText; // Get the InnerText of the number tag.
let lengthDial = 0; // PreSet value for Length of the Number to be dialed.
const delBtn = document.querySelector(".del"); // Gets the Delete Button


// To assign each button with Click Event
digit.forEach((item) => {
    item.addEventListener("click", () => {
        const digitVal = item.firstElementChild.innerText;  // Gets the InnerText from the First Element child of each Digit Tag 
        if (lengthDial < 12) {
            toBeDialed += digitVal; // This only add the New Digit to the number if length is less than 12 as indexing for string is from 0, we it as Less Than 12
        }
        number.innerHTML = toBeDialed;
        lengthDial = toBeDialed.length; // sets the lengthDial value as Length of the ToBeDialed
    });
});


// To delete the Text in Text Box


// Here the Last character of the string is deleted from the String and new String is assigned to the Original string.
delBtn.addEventListener("click", () => {
    if (lengthDial > 0) {
        let newString = toBeDialed.slice(0, lengthDial - 1);
        toBeDialed = newString;
        number.innerHTML = toBeDialed;
        lengthDial--;
    }
});