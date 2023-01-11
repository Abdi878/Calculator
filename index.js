//FUNCTIONS FOR OPERATIONS
const add = (num1,num2) => num1+num2;
const multiply = (num1,num2) => num1*num2;
const subtract = (num1,num2) => num1-num2;
const divide = (num1,num2) => num1/num2;
const operate = (operator,num1,num2)=>operator(num1,num2);

let a = null
let b = null
let operand = null
let result = null

//REFERENCES TO OPERATOR BUTTONS
const addButton = document.getElementById("add")
const multiplyButton = document.getElementById("mult")
const subtractButton = document.getElementById("subtract")
const divideButton = document.getElementById("divide")

//ADDS TO DISPLAY WHEN A NUMBER IS PRESSED
const display = document.querySelector(".display")
const numbers = document.querySelectorAll(".number")
numbers.forEach(function(num){
    num.addEventListener('click',e=>{
        let digit = parseInt(num.innerHTML)
        display.innerHTML+=digit
        })})



//STORES THE VALUE ON DISPLAY WHEN AN OPERATOR IS PRESSED
const operators = document.querySelectorAll(".operator")
operators.forEach(function(operator){
    operator.addEventListener("click",e=>{
    if(operand ==null ){
    a = parseFloat(display.innerHTML)
    display.innerHTML=""
    if(operator.id=="mult"){
        operand = multiply
    }
    else if(operator.id=="add"){
        operand = add
    }
    else if(operator.id=="divide"){
        operand = divide
    }
    else if(operator.id=="subtract"){
        operand = subtract
    }

    }
    else{
        b = parseFloat(display.innerHTML)
        display.innerHTML=""
        if(operator.id == "equals"){
            if(a!=null && b!=null){
                result = +(operate(operand,a,b)).toFixed(8)
                if(result==Infinity) result="lol no";
                display.innerHTML=result
                console.log(a)
                console.log(b)
                console.log(result)
                
                operand = null
                a = null
                b = null
            }
        }
    }
        
    
    })
})
//CLEARS THE DISPLAY
const clear = document.querySelector("#clear")
clear.addEventListener("click",e=>{
    a = null
    b = null
    operand = null
    display.innerHTML=""})




