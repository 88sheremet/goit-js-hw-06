


const counterBtnDecrement = document.querySelector('button[data-action="decrement"]');
console.log(counterBtnDecrement);

const counterBtnIncrement = document.querySelector('button[data-action="increment"]');
console.log(counterBtnIncrement);

const value = document.querySelector('#value')
console.log(value)

let counterValue = 0;

counterBtnDecrement.addEventListener('click', () => {
    
    counterValue -= 1; 
    value.textContent = counterValue;
    // console.log(counterValue) 
})

counterBtnIncrement.addEventListener('click', () => {
    
    counterValue += 1; 
    value.textContent = counterValue;
    // console.log(counterValue) 
})