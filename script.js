document.getElementById("envelope").addEventListener("click", function() {
    this.style.display = "none";
    document.getElementById("letter-container").classList.remove("hidden");

    createHearts();
});

document.getElementById("no").addEventListener("click", function() {
    let randomX = Math.random() * (window.innerWidth - 150);
    let randomY = Math.random() * (window.innerHeight - 150);
    this.style.left = `${randomX}px`;
    this.style.top = `${randomY}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("letter-container").style.display = "none";
    document.getElementById("gif-container").classList.remove("hidden");
});

function createHearts() {
    let heartsContainer = document.getElementById("hearts-container");

    for (let i = 0; i < 25; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heartsContainer.appendChild(heart);

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;

        let endX = Math.random() * window.innerWidth;
        let endY = Math.random() * window.innerHeight;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        heart.animate([
            { transform: `translate(0, 0)`, opacity: 1 },
            { transform: `translate(${endX - x}px, ${endY - y}px)`, opacity: 0 }
        ], {
            duration: 2000 + Math.random() * 1000,
            easing: "ease-out",
            iterations: 1,
            fill: "forwards"
        });

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
