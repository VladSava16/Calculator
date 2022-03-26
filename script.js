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

let no1 = null;
let no2 = null;
let op = null;

let numberButtons = document.querySelector(".numbers");
numberButtons.childNodes.forEach(btn => btn.addEventListener("click", (e) =>{
    if(op === null)
        no1 = no1 * 10 + +e.target.textContent;
    console.log(no1);
}));