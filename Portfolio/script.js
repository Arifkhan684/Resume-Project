let btn = document.querySelector("#seey");
let menu = document.querySelector(".nav");
btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.classList.toggle('open');
    menu.classList.toggle("open");
    if (btn.classList.contains('open')) {
        btn.textContent = '✕'; // Show close icon
    } else {
        btn.textContent = '☰'; // Show hamburger icon (optional)
    }
});
