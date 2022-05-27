"use strict";


const btn_Numbers = document.querySelectorAll('.btn--number');
const btn_Opearations = document.querySelectorAll('.operation');
const btn_Clear = document.querySelector('.clear');
const btn_Delete = document.querySelector('.delete');
const btn_execute = document.querySelector('.execute');

const prevDisplay = document.querySelector('.display__prev');
const currentDisplay = document.querySelector('.display__current');
const time = document.querySelector('.time');
const themeBtn = document.querySelector('.theme');


themeBtn.addEventListener('click',themeFunc);
const gridContainer = document.querySelector('.grid--container');
const container = document.querySelector('.container');
const icons = document.querySelectorAll('i');




//theme-function
function themeFunc() {

    
    gridContainer.style.backgroundColor = "#fff";
    btn_Numbers.forEach(item => {
        item.style.color = "#000";
    });
    container.style.backgroundColor = "#fff";
    icons.forEach(item => {
        item.style.color = "#000";
    })
    time.style.color = "#000"
    
}


//time-function
const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

time.innerHTML = `${hour} : ${minute}`;




//append-function

btn_Numbers.forEach(number => {
    number.addEventListener('click', () => {

        
        if (currentDisplay.textContent.length == 0 & number.textContent == 0) {
            currentDisplay.textContent = '';
        } else
        currentDisplay.textContent += number.innerHTML;

    })
    
})

// clear-function

btn_Clear.addEventListener('click',() => {
    prevDisplay.textContent = "";
    currentDisplay.textContent = "";
})



//operations-function
btn_Opearations.forEach(operatekey => {
    operatekey.addEventListener('click', () => {
        prevDisplay.textContent += currentDisplay.textContent + operatekey.innerHTML  ;
        currentDisplay.textContent = '';
    })
    });


//delete function 

btn_Delete.addEventListener('click',() => {
    
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
});



btn_execute.addEventListener('click', () => {
    prevDisplay.textContent += currentDisplay.textContent;
    currentDisplay.textContent = eval(prevDisplay.textContent);
});




