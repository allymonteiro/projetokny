const scott = document.querySelector('.scott');
const pipe = document.querySelector('.pipe');

const jump = () => {
    scott.classList.add('jump');

    setTimeout(() => {

    scott.classList.remove('jump');

    }, 500)
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const scottPosition = +window.getComputedStyle(scott).bottom.replace('px', '');
    
    if (pipePosition <= 130 && pipePosition > 0  && scottPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        scott.style.animation = 'none';
        scott.style.bottom = `${scottPosition}px`;

        scott.src = '../img/gameimg/death.gif'
        scott.style.margin.Left = '10px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);