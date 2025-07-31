

// //smooth scrolling
// const lenis = new Lenis({
//   duration: 1.2, // Scroll duration
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth transitions
//   direction: 'vertical', // Scroll direction: vertical or horizontal
//   gestureDirection: 'vertical', // Gesture direction: vertical, horizontal, or both
//   smooth: true, // Enable smooth scrolling
//   mouseMultiplier: 1, // Mouse scroll speed multiplier
//   smoothTouch: false, // Disable smooth scrolling for touch devices
//   touchMultiplier: 2, // Touch scroll speed multiplier
//   infinite: false, // Disable infinite scroll
// });

// // Optional: Listen to scroll events
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({ scroll, limit, velocity, direction, progress });
// });

// // Animation frame loop function
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);

function addHoverEffect(imgSelector, hoverSrc, originalSrc) {
    const img = document.querySelector(imgSelector);
    if (!img) return;
    img.addEventListener("mouseover", () => {
        img.src = hoverSrc;
    });
    img.addEventListener("mouseout", () => {
        img.src = originalSrc;
    });
}



// Calling the function for each image
addHoverEffect(".img", "./model/DSC03004-Edit.webp", "./model/DSC02972-Edit.webp");
addHoverEffect("#img2", "./model/PAL03269-Edit.webp", "./model/PAL03209-Edit.webp");
addHoverEffect("#img3", "./model/Screenshot (240).png", "./model/Screenshot (239).png");
addHoverEffect("#img4", "./model/Screenshot (242).png", "./model/Screenshot (241).png");
addHoverEffect("#img5", "./model/Screenshot (244).png", "./model/Screenshot (243).png");
addHoverEffect("#img6", "./model/Screenshot (246).png", "./model/Screenshot (245).png");


function addClickRedirect(selector, url) {
    const element = document.querySelector(selector);
    if (!element) return;
    element.addEventListener("click", () => {
        window.location.href = url;
    });
}

// Array of image selectors and their target URLs
const imageLinks = [
    [".img", "./mensection/cargo.html"],
    ["#img2", "./mensection/pants.html"],
    ["#img3", "./mensection/t-shirts.html"],
    ["#img4", "./mensection/shirts.html"],
    ["#img5", "./mensection/lower.html"],
    ["#img6", "./mensection/fullseleve.html"]
];

// Loop through the array and apply click listeners
imageLinks.forEach(([selector, url]) => {
    addClickRedirect(selector, url);
});
