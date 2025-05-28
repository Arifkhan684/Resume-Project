const img = document.querySelector(".img");

img.addEventListener("mouseover", () => {
    img.src = "./images/DSC03004-Edit.webp"

})
img.addEventListener("mouseout", () => {
    img.src = "./images/DSC02972-Edit.webp";
})


const img2 = document.querySelector("#img2");

img2.addEventListener("mouseover", () => {
    img2.src = "./images/PAL03269-Edit.webp"

})
img2.addEventListener("mouseout", () => {
    img2.src = "./images/PAL03209-Edit.webp"
})


const img3 = document.querySelector("#img3");

img3.addEventListener("mouseover", () => {
    img3.src = "./images/Screenshot (240).png"
})
img3.addEventListener("mouseout", () => {
    img3.src = "./images/Screenshot (239).png"
})

const img4 = document.querySelector("#img4");

img4.addEventListener("mouseover", () => {
    img4.src = "./images/Screenshot (242).png"
})
img4.addEventListener("mouseout", () => {
    img4.src = "./images/Screenshot (241).png"
})

const img5 = document.querySelector("#img5");

img5.addEventListener("mouseover", () => {
    img5.src = "./images/Screenshot (244).png"
})
img5.addEventListener("mouseout", () => {
    img5.src = "./images/Screenshot (243).png"
})

const img6 = document.querySelector("#img6");

img6.addEventListener("mouseover", () => {
    img6.src = "./images/Screenshot (246).png"
})
img6.addEventListener("mouseout", () => {
    img6.src = "././images/Screenshot (245).png"
})


const imgclick = document.querySelector(".img");
imgclick.addEventListener("click", () => {
    window.location.href = "./imageClick.html";
});


const imgclick1 = document.querySelector("#img2");

imgclick1.addEventListener("click", () => {
    window.location.href = './pants.html'
})

const imgclick2 = document.querySelector("#img3");

imgclick2.addEventListener("click", () => {
    window.location.href = "./t-shirts.html"
})


const imageClick3 = document.querySelector("#img4");
imageClick3.addEventListener("click",() =>{
    window.location.href = "./shirts.html"
})


const imageClick4 = document.querySelector("#img5");
imageClick4.addEventListener("click",() =>{
    window.location.href = "./lower.html"
})

const imgclick5 = document.querySelector("#img6");
 imgclick5.addEventListener("click",() =>{
    window.location.href = "./fullselveef.html"
 })