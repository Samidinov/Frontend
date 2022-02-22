const counters = document.querySelectorAll('.counter')

counters.forEach(counter => { 
    counter.innerText = '0'

    const size = +counter.getAttribute('data-target')
    const increment = size/10;
    let value = 0;

    
    const updateCountSize = () => {
        
        value = value + increment

        if(value < size) {
            counter.innerText = `${value}`;
            setTimeout(updateCountSize, 100);

        } else {
            counter.innerText = size;
        }
    }
    updateCountSize()


});