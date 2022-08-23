// keep track of a running total --> variable to hold stored numbers
let runningTotal = 0;

// keep track of buffer -> represents whats on the screen at any given time
// keep "source of truth" out of the DOM and in JS
// make sure what is on screen is a "string"
let buffer = "0";

// keep track of previous actions -> stores previous operators (+, -, /, *)
let previousOperator = null; 

// this is where we are writing out to
const screen = document.querySelector('.screen');

// what happens when a user clicks a button?
function buttonClick(value) {
    //is this not a number?
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);
    }
    // rerender what is in the buffer and display it to the screen
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
//    if (symbol === 'C') {
//        buffer = '0';
//        runningTotal = 0; 
//    }
switch (symbol) {
    case 'C': 
        buffer = '0';
        runningTotal = 0; 
        break;
    case '=':
        if (previousOperator === null) {
            //need two numbers for math
            return; 
        } 
        // function to do the math below
        // turn the string into an int
        flushOperation(parseInt(buffer));
        // get rid of the previous operator after executing equal
        previousOperator = null; 
        // display answer to the user
        buffer = runningTotal;
        runningTotal = 0;
        break;
    case '←':
        if (buffer.length === 1) {
            buffer = '0';
        } else {
            // substring takes a longer string and returns to a smaller string
            // 0 is the begining of the string
            // start at 0 and then stop one short of going to the end
            buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
    case '+':
    case '−':
    case '×':
    case '÷':
        handleMath(symbol);
         break;
}
}

function handleMath(symbol) {
    if (buffer === '0') {
        // do nothing - end the function
        return;
    }
// turns buffer from a string into a number
// const intBuffer = +buffer;
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        // do the stored operation and pass the total to the buffer
        flushOperation(intBuffer);
    }
    // keep track of the previous operator
    previousOperator = symbol; 

    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer; 
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer; 
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer; 
    } else {
        runningTotal /= intBuffer; 
    } 
}

function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer = buffer + numberString;
        // buffer += numberString
    }
}

// this function is called once and sets everything up
function init () {
    // section that grabs all of the calc buttons
    document.querySelector('.calc-buttons')
    // whenever a click event happens, run this function -> browser gives you the event object
    .addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
    })
}
init(); 