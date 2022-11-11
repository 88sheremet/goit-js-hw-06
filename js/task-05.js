const input = document.getElementById('name-input');
// console.log(input);
const span = document.getElementById('name-output');
// console.log(span);

input.addEventListener('input', onInputChange);

function onInputChange(event){
    // console.log(event.currentTarget.value);
    span.textContent = event.currentTarget.value;
}