let one = document.querySelector(".addOne");
const fifteen = document.querySelector(".value");
let inputOne = document.querySelector("#bag")
let inputTwo = document.querySelector("#jar")


let count = 1; 
let valueOne = 15;
let valueTwo = 30;


function firstPrice(){
    fifteen.innerText = "$" + valueOne * count
}

function secondPrice(){
    fifteen.innerText = "$" + valueTwo * count
}

function lessOne(){
    fifteen.innerText = "$" + count * valueOne
}

function lessTwo(){
    fifteen.innerText = "$" + count * valueTwo
}

function Add(){
    if(count < 20){
    count = count + 1
    one.textContent = count
    fifteen.innerText = count
    if(inputOne.checked == true){
        firstPrice();
    } else if(inputTwo.checked == true){
        secondPrice();
    }
}
}

// textContent serve para mudar o que está no texto

function Less(){
    if(count > 1){
    count = count - 1;
    one.textContent = count;
    if(inputOne.checked == true){
        lessOne();
    } else if(inputTwo.checked == true){
        lessTwo();
    }
}
}
