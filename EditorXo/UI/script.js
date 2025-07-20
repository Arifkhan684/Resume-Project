const menuBtn = document.querySelector("#menu-btn");
//ye iske andar k element ko select karega i ko
const icon = menuBtn.querySelector("i");
const nav = document.querySelector(".nav")

menuBtn.addEventListener("click",() =>{
    nav.classList.toggle("active");
    if(nav.classList.contains("active")){
        icon.classList.remove("ri-menu-line");
        icon.classList.add("ri-close-line");
    }else{
        icon.classList.add("ri-menu-line");
        icon.classList.remove("ri-close-line");
    }
})
//smooth scrolling
const lenis = new Lenis({
  duration: 1.2, // Scroll duration
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for smooth transitions
  direction: 'vertical', // Scroll direction: vertical or horizontal
  gestureDirection: 'vertical', // Gesture direction: vertical, horizontal, or both
  smooth: true, // Enable smooth scrolling
  mouseMultiplier: 1, // Mouse scroll speed multiplier
  smoothTouch: false, // Disable smooth scrolling for touch devices
  touchMultiplier: 2, // Touch scroll speed multiplier
  infinite: false, // Disable infinite scroll
});

// Optional: Listen to scroll events
lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
  console.log({ scroll, limit, velocity, direction, progress });
});

// Animation frame loop function
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
