function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if(b === 0)
        return "ERROR";
    return a / b;
}

function operate(a, b, op){
    if(op == "+")
        return add(a, b);
    else if(op == "-")
        return subtract(a, b);
    else if(op == "*")
        return multiply(a, b);
    else
        return divide(a, b);
}

function Clear(){
    no1 = no2 = op = ans = null;
    currentExpression.textContent = "";
    answer.textContent = "";
}

function deleteLastDigit(currentNo){
    if(currentNo == 1){
        if(no1 > 0)
            no1 = Math.floor(no1 / 10);
        else
            no1 = Math.ceil(no1 / 10);
    }
    else{
        if(no2 >0)
            no2 = Math.floor(no2 / 10);
        else
            no2 = Math.ceil(no2 / 10);
    }
    currentExpression.textContent = no1 + op + no2;
}

let no1 = null;
let no2 = null;
let op = null;
let ans = null;
let currentNo = 1;

const currentExpression = document.querySelector(".current-expression");
const answer = document.querySelector(".answer");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");

const numberButtons = document.querySelector(".numbers");
numberButtons.childNodes.forEach(btn => btn.addEventListener("click", (e) =>{
    if(op === null)
        no1 = no1 * 10 + +e.target.textContent;
    else
        no2 = no2 * 10 + +e.target.textContent;
    currentExpression.textContent = no1 + op + no2;
}));

const operatorButtons = document.querySelector(".operators");
operatorButtons.childNodes.forEach(operator => operator.addEventListener("click", (e) => {
    if(no2 !== null){
        let partAns = operate(no1, no2, op);
        answer.textContent = partAns;
        no1 = partAns;
        no2 = null;
        op = e.target.textContent;
        currentNo = 2;
    }
    else{
        op = e.target.textContent;
        console.log(op);
        currentNo = 2;
    }
    currentExpression.textContent = no1 + op;
}));

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e) =>{
    if(no2 === null)
        answer.textContent = no1;
    else{
        answer.textContent = operate(no1, no2, op);
        no1 = +answer.textContent;
        op = no2 = null;
        currentNo = 1;
    }
});

clearButton.addEventListener("click", () => Clear()); // handles the clear onclick event
deleteButton.addEventListener("click", () => deleteLastDigit(currentNo));
