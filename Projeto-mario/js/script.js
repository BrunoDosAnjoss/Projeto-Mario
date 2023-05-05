const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')
const over = document.querySelector('.game-over2')

function jump() {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump');   
    }, 500)
}

const loop = setInterval(() => {
   
   const pipePosition = pipe.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   const cloudsPosition = clouds.offsetLeft;

   if(pipePosition <= 120 && marioPosition < 80) {

     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.src = '/imagens/game-over.png';
     mario.style.width = '75px';
     mario.style.margin = '50px';

     clouds.style.animation = 'none'
     clouds.style.opacity = 0.1;
     clouds.style.left = `${cloudsPosition}px`;

     over.src = '/imagens/game-over2.png'
     over.style.opacity = 1;

     


    clearInterval(loop);
   } 

},10);

document.addEventListener('keydown',jump);