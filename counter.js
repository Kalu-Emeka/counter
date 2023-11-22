let countValue = document.getElementById("count");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");


let increaseCount = () => {
    countValue.textContent++;
}
increase.addEventListener("click", increaseCount);

let decreaseCount = () => {
    countValue.textContent--;
}
decrease.addEventListener("click", decreaseCount);

let resetCount = () => {
    countValue.textContent = 0;
}
reset.addEventListener("click", resetCount);
