// 1.

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        };

        if (timer === 30 * 60) {
            alert("Залишилось менше половини часу!");
        };
    }, 1000);
};

// 2.

function startTimer2(duration, display2) {
    let timer = duration;
    const startButton = document.getElementById("startButton");

    const intervalId = setInterval(function () {
        const seconds = parseInt(timer / 1000, 10);
        const milliseconds = parseInt(timer % 1000, 10);

        display2.textContent = seconds + "." + milliseconds.toString().padStart(3, '0');

        if (seconds === 10) {
            startButton.classList.add("animation");
        }

        if (timer <= 0) {
            clearInterval(intervalId);
            startButton.disabled = false;
            startButton.textContent = "Почати знову";
            startButton.classList.remove("animation");
        }

        timer -= 1;
    }, 1);
};

window.onload = function () {
    const oneHour = 60 * 60
    const display = document.querySelector('.timer');
    startTimer(oneHour, display);
    
    
    
    const thirtySeconds = 30 * 1000;
    const display2 = document.querySelector('#timer');
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function () {
        this.disabled = true;
        startTimer2(thirtySeconds, display2);
    });
};