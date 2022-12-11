const pageloaded = document.getElementById('cible')
document.addEventListener('DOMContentLoaded', function() {
    pageloaded.style.color = 'rgb(117, 197, 93)';
});

const elem = document.querySelector('.title');
const animcroco = document.querySelector('.special-croco');
const animpills = document.querySelector('.special-pills');
const animinsect = document.querySelector('.special-insect');

window.onload = () => {
    animcroco.classList.add('anime');
    animpills.classList.add('anime2');
    animinsect.classList.add('anime3');
}