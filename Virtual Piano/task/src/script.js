let keys = document.querySelectorAll('kbd');

document.addEventListener('keypress', function (event) {
    for (let key of keys) {
        if (event.code === `Key${key.innerHTML}`) {
            let sound = new Audio(`resources/audio/${key.innerHTML}.mp3`);
            sound.play();
            // console.log(`The '${key.innerHTML}' key is pressed`);
            // return;
        }
    }
})

document.addEventListener("keyup", (event) => {
    for (let key of keys) {
        if (event.code === `Key${key.innerHTML}`) {
            if ([`KeyW`,`KeyE`,`KeyT`,`KeyY`,`KeyU`].includes(`${event.code}`)) {
                key.style.background = "black";
            } else {
                key.style.background = "white";
            }
        }
    }
})

document.addEventListener("keydown", (event) => {
    for (let key of keys) {
        if (event.code === `Key${key.innerHTML}`) {
            if ([`KeyW`,`KeyE`,`KeyT`,`KeyY`,`KeyU`].includes(`${event.code}`)) {
                key.style.background = "#3C3C3C";
            } else {
                key.style.background = "#E1E1E1";
            }
        }
    }
})