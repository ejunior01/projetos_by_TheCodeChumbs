var number = document.querySelector(".number-counter").innerHTML;

function soma() {
    number++
    document.querySelector(".number-counter").innerHTML = number
};
function subtrair() {
    number--
    document.querySelector(".number-counter").innerHTML = number
};
function zerar() {
    number = 0
    document.querySelector(".number-counter").innerHTML = number
}