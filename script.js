function add(a, b){
    return Number((a + b).toFixed(1));
}
function subtract(a, b){
    return Number((a - b).toFixed(1));
}
function multiply(a, b){
    return Number((a * b).toFixed(1));
}
function divide(a, b){
    if(b === 0)
        return "ERROR";
    return Number((a / b).toFixed(1));
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
    no1 = no2 = op = ans = "";
    currentExpression.textContent = "";
    answer.textContent = "";
    decimalButton.disabled = false;
}

function deleteLastDigit(currentNo){
    if(currentNo == 1){
        if(no1 !== ""){
            if(no1.charAt(no1.length - 1) == ".")
                decimalButton.disabled = false;
            no1 = no1.slice(0, -1);
        }
        else
            no1 = "0";
    }
    else if(currentNo == 2){
        if(no2 !== ""){
            if(no2.charAt(no2.length - 1) == ".")
                decimalButton.disabled = false;
            no2 = no2.slice(0, -1);
        }
        else
            no2 = "0";
    }
    currentExpression.textContent = no1 + op + no2;
}

let no1 = "";
let no2 = "";
let op = "";
let ans = "";
let currentNo = 1;

const currentExpression = document.querySelector(".current-expression");
const answer = document.querySelector(".answer");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.querySelector(".decimal");

const numberButtons = document.querySelector(".numbers");
numberButtons.childNodes.forEach(btn => btn.addEventListener("click", (e) =>{
    if(op === ""){
        no1 = no1 + e.target.textContent;
        currentExpression.textContent = no1;
    }
    else{
        no2 = no2 + e.target.textContent;
        currentExpression.textContent = no1 + op + no2;
    }
}));

const operatorButtons = document.querySelector(".operators");
operatorButtons.childNodes.forEach(operator => operator.addEventListener("click", (e) => {
    if(no2 !== ""){
        let partAns = operate(+no1, +no2, op);
        answer.textContent = partAns;
        no1 = partAns;
        no2 = "";
        op = e.target.textContent;
        currentNo = 2;
        decimalButton.disabled = false;
    }
    else{
        if(e.target.textContent == "-" && no1 == "")
            no1 += "-";
        else{
        op = e.target.textContent;
        console.log(op);
        currentNo = 2;
        decimalButton.disabled = false;
        }
    }
    currentExpression.textContent = no1 + op;
}));

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", (e) =>{
    if(no2 === "")
        answer.textContent = no1;
    else{
        answer.textContent = operate(+no1, +no2, op);
        no1 = +answer.textContent;
        op = no2 = "";
        currentNo = 1;
    }
});

clearButton.addEventListener("click", () => Clear()); // handles the clear onclick event
deleteButton.addEventListener("click", () => deleteLastDigit(currentNo));
decimalButton.addEventListener("click", (e) =>{
    if(currentNo == 1){
        if(no1 == "")
            no1 = "0.";
        else
            no1 += ".";
        currentExpression.textContent = no1;
    }
    else{
        if(no2 == "")
            no2 = "0.";
        else
            no2 += ".";
        currentExpression.textContent = no1 + op + no2;
    }
    decimalButton.disabled = true;
});