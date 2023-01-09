const add = (num1,num2) => num1+num2;
const multiply = (num1,num2) => num1*num2;
const subtract = (num1,num2) => num1-num2;
const divide = (num1,num2) => num1/num2;
const operate = (operator,num1,num2)=>operator(num1,num2);

const addButton = document.getElementById("add")
const multiplyButton = document.getElementById("mult")
const subtractButton = document.getElementById("subtract")
const divideButton = document.getElementById("divide")
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")
numbers.forEach(function(num){
    num.addEventListener('click',e=>display.textContent+=parseInt(num.innerHTML))})

const clear = document.querySelector("#clear")

clear.addEventListener("click",e=>display.innerHTML="")


