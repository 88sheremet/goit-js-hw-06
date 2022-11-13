const input = document.getElementById('font-size-control');
// console.log(input);
const span = document.getElementById('text');
// console.log(span);

input.oninput = function() {
    span.style.fontSize = input.value + "px";
  };