//FUNCTIONS FOR OPERATIONS
const add = (num1,num2) => num1+num2;
const multiply = (num1,num2) => num1*num2;
const subtract = (num1,num2) => num1-num2;
const divide = (num1,num2) => num1/num2;
const negative =(num) =>-1*num;
const power = (num1,num2) =>{
    let sum = 1;
    for(let i =0;i<num2;i++){
        sum*=num1
    }
    return sum
}
const operate = (operator,num1,num2)=>operator(num1,num2);

let a = null
let b = null
let operand = null
let result = null

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
    else if(operator.id=="power"){
        operand = power
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

const negativeButton = document.querySelector("#sign")
negativeButton.addEventListener('click',e=>{
    if(display.innerHTML[0]=="-"){
        display.innerHTML=display.innerHTML.substring(1)
    }
    else{
    display.innerHTML="-"+display.innerHTML}
    });
//CLEARS THE DISPLAY
const clear = document.querySelector("#clear")
clear.addEventListener("click",e=>{
    a = null
    b = null
    operand = null
    display.innerHTML=""})




