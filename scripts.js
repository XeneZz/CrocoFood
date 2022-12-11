let counter = 0;
let timer;

const bg = document.querySelector('body');

let crocoTitle = document.querySelector('.title');
let aquaTitle = document.querySelector('.title2');
let futuTitle = document.querySelector('.title3');

const bgsliderRight = document.querySelector('.arrowright');
bgsliderRight.addEventListener('click', next);

const bgsliderLeft = document.querySelector('.arrowleft');
bgsliderLeft.addEventListener('click', prev);

function next() {
    if (counter == 0) {
        bg.classList.remove('bg');
        bg.classList.add('slidebg');

        crocoTitle.style.display = 'none';
        aquaTitle.style.display = 'block';

        counter++;
    } else if (counter == 1) {
        bg.classList.add('slidebg2');
        bg.classList.remove('slidebg');

        aquaTitle.style.display = 'none';
        futuTitle.style.display = 'block';

        counter++;
    } else if (counter == 2) {
        bg.classList.remove('slidebg2');
        bg.classList.add('bg');

        futuTitle.style.display = 'none';
        crocoTitle.style.display = 'block';

        counter = 0;
    }
};

function prev() {
    if (counter == 1) {
        bg.classList.add('slidebg2');
        bg.classList.remove('slidebg');

        aquaTitle.style.display = 'none';
        futuTitle.style.display = 'block';

        counter++;
    } else if (counter == 0) {
        bg.classList.remove('bg');
        bg.classList.add('slidebg');

        crocoTitle.style.display = 'none';
        aquaTitle.style.display = 'block';

        counter++;
    } else if (counter == 2) {
        const bg = document.querySelector('body');
        bg.classList.remove('slidebg2');
        bg.classList.add('bg');

        futuTitle.style.display = 'none';
        crocoTitle.style.display = 'block';

        counter = 0;
    }
};

timer = setInterval(next, 7000)

let pageloaded = document.querySelector('ul>li>a')
document.addEventListener('DOMContentLoaded', function() {
    pageloaded.style.color = 'rgb(117, 197, 93)';
});