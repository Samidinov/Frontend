const sounds = ['audio-1', 'audio-2', 'audio-3', 'audio-4', 'audio-5'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').
    appendChild(btn);
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause();
        song.currentTime = 0;
    })
}