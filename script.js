let btn = document.querySelector("button");
let container = document.querySelector(".main");
let text = ["Open It", "Close It"];
let track = 0;
let s1 = new Audio("sound1.mp3");
btn.addEventListener("click", () => {
    if (track == 0) {
        track = 1;
        btn.textContent = text[1];
        s1.play();
    }
    else {
        track = 0;
        btn.textContent = text[0];
    }
    container.classList.toggle("gain");
})