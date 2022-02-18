const insertContainer = document.getElementById('insert')

window.addEventListener('keydown', (key) => {
    insertContainer.innerHTML = `
    <div class="key">${key.key}
            <small class="label">event.key</small>
        </div>
        <div class="key">${key.keyCode}
            <small class="label">event.keyCode</small>
        </div>
        <div class="key">${key.code}
            <small class="label">event.code</small>
        </div>
        <div class="key">Press any key to get the keyCode </div>`;

})