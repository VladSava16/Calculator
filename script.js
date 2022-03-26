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

let no1 = null;
let no2 = null;
let op = null;

const numberButtons = document.querySelector(".numbers");
numberButtons.childNodes.forEach(btn => btn.addEventListener("click", (e) =>{
    if(op === null)
        no1 = no1 * 10 + +e.target.textContent;
    else
        no2 = no2 * 10 + +e.target.textContent;
    console.log(no1, no2);
}));

const operatorButtons = document.querySelector(".operators");
operatorButtons.childNodes.forEach(operator => operator.addEventListener("click", (e) => {
    if (e.target.classList.value == "plus")
        op = "+";
    else if(e.target.classList.value == "minus")
        op = "-";
    else if(e.target.classList.value == "multiply")
        op = "*";
    else
        op = "/";
    console.log(op);
}));
