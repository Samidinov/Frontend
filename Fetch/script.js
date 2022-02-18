const jokeContainer = document.getElementById('joke-container')
const jokeButton = document.getElementById('joke-button')


function getJoke() {
    const fetchConfig = {
        headers: {
            Accept: 'application/json'
        }
    }

    fetch('https://icanhazdadjoke.com', fetchConfig)
        .then((response) => response.json())
        .then((data) => jokeContainer.innerHTML = data.joke)
}

jokeButton.addEventListener('click', () => getJoke())