"use strict";


const btn_Numbers = document.querySelectorAll('.btn--number');
const btn_Opearations = document.querySelectorAll('.operation');
const btn_Clear = document.querySelector('.clear');
const btn_Delete = document.querySelector('.delete');

const btn_execute = document.querySelector('.execute');

const prevDisplay = document.querySelector('.display__prev');
const currentDisplay = document.querySelector('.display__current');





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
        currentDisplay.textContent += operatekey.innerHTML;
    })
    });


//delete function 

btn_Delete.addEventListener('click',() => {
    
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
});



btn_execute.addEventListener('click', () => {
    
    currentDisplay.textContent = eval(currentDisplay.textContent);
});


