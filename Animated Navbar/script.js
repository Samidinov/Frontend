const btnToggle = document.getElementById('toggle')
const menuBar = document.getElementById('nav')

btnToggle.addEventListener('click', function() {
    menuBar.classList.toggle('active')
})