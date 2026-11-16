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
        return "c'mon man cant divide 0";
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


function calculate() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    let result = operate(operator, a, b);

    if (operator === "/" && b === 0) {

        resetCalculator();
        screen.textContent = result;
        return;
    }

    result = Math.round(result * 1000) / 1000;
    screen.textContent = result;

    firstNumber = String(result);
    secondNumber = "";
}

function resetCalculator() {
    screen.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    operator = null;
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
            screen.textContent = firstNumber + " " + operator + " " + secondNumber;
        }
    });
});


const signs = document.querySelectorAll('.sign');
signs.forEach((sign) => {
    sign.addEventListener('click', () => {

    if( firstNumber === "") {
        return;
    } 
    
    if (secondNumber !== "") {
        calculate();
    } 
        operator = sign.textContent;
        screen.textContent = firstNumber + " " + operator;
    });
});


const equal = document.getElementById('equal');
equal.addEventListener('click', () => { 
    if (firstNumber === "" || secondNumber === "" || operator === null) {

        return;
    }

    calculate();

    operator = null;
});


const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operator = null;
    screen.textContent = "0";
});


