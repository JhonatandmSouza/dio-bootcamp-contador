let buttomDecrement = document.getElementById("decrement");
buttomDecrement.addEventListener("click", decrement);

let buttomIncrement = document.getElementById("increment");
buttomIncrement.addEventListener("click", increment);

let currentNumberWrapper = document.getElementById('content');
let currentNumber = 0;

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment() {
    currentNumber++
    currentNumberWrapper.innerHTML = currentNumber;
}


