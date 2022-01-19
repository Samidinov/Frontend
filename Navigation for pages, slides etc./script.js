let circles = document.querySelectorAll('.circle');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let progress = document.getElementById('progress');

let indexActive = 0;

next.addEventListener('click', () => {

    if(indexActive < (circles.length-1)) {
        indexActive++;
    }

    update();
});

prev.addEventListener('click', () => {

    if(indexActive != 0) {
        indexActive--;
    }
    
    update();
})

function update () {
    circles.forEach((circle, index) => {
        if(index <= indexActive) {
            circle.classList.add('active');
        
        }   else {
            circle.classList.remove('active');
        }
    })
    progress.style.width = 100/(circles.length-1)*(indexActive)+'%';

    prev.disabled = indexActive == 0 ? true : false;
    next.disabled = indexActive == (circles.length-1) ? true : false;
}