const input = document.getElementById('validation-input');
// console.log(input);
const lengthInput = input.getAttribute('data-length');
// console.log(lengthInput);


input.addEventListener('blur', (event) => {
   
    console.log(event.target.value);
    console.log(event.target.value.length);
  if (event.target.value.length === 6) {
    event.target.classList.remove('invalid');
    event.target.classList.add('valid');
  }
  else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
}
})
