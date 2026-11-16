let firstNumber = "";
let secondNumber = "";
let operator = null;

//----------------------------------------------- logic for the calculator

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
            default:
                return "Error: Invalid operator";
    }
}


//------------------------display

const screen = document.getElementById('screen');

const digits = document.querySelectorAll('.digit');

digits.forEach((digit) => {
    digit.addEventListener('click', () => {

        if (operator === null) {
            firstNumber += digit.textContent;
            screen.textContent = firstNumber;
        } else {
            secondNumber += digit.textContent;
            screen.textContent = secondNumber;
        }
    });
});

const signs = document.querySelectorAll('.sign');
signs.forEach((sign) => {
    sign.addEventListener('click', () => {
        operator = sign.textContent;
        screen.textContent = firstNumber + " " + operator;
    });
});

const equal = document.getElementById('equal');
equal.addEventListener('click', () => { 

    if (firstNumber === "" || secondNumber === "" || operator === null) {

        return;
    }

    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let result = operate(operator, a, b);
    screen.textContent = result;

    firstNumber = String(result);
    secondNumber = "";
    operator = null;
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operator = null;
    screen.textContent = "0";
});


