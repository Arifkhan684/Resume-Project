let icon = document.querySelector(".icon");
let body = document.querySelector("body");
let button = document.querySelector(".btn");
let image = document.getElementById("main-img");
let price = document.querySelector(".price");
let clickSizes = document.querySelectorAll(".click-size span");  // ✅ All sizes
let addToCartBtn = document.getElementById("add-btn");
let productName = document.querySelector(".click-head p");
let imageCart = document.querySelectorAll(".img");
let wrapperInt = document.querySelectorAll(".wrapper"); // All .wrapper elements
let clickSection = document.querySelector(".click-section"); // Only one section

let wrapper = [];

const addDataToHTML = () => {
    // wrapper sections empty
    wrapperInt.forEach(wrapper => {
        wrapper.innerHTML = '';
    });

    // click section empty
    clickSection.innerHTML = '';

    // Create one click section manually
    let newClick = document.createElement('div');
    newClick.classList.add('click');
    newClick.innerHTML = `
        <div class="click-img">
            <img src="${product.image[4]}" alt="" id="main-img">
            <div class="click-head">
                <p>${product.name.toUpperCase() }</p>
                <p class="price">Rs.${product.price}</p>
                <p>MRP inclusive of all taxes</p>
                <div class="click-color">
                    <p>Colour:</p>
                    <img src="${product.image[0] }" alt="" id="click-color1">
                    <img src="${product.image[1] }" alt="" id="click-color2">
                    <img src="${product.image[2] }" alt="" id="click-color3">
                    <img src="${product.image[3] }" alt="" id="click-color4">
                </div>
                <p id="size-text">Select Size</p>
                <div class="click-size">
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                </div>
                <div class="btn">
                    <button id="add-btn">Add to Cart</button>
                </div>
            </div>
        </div>
    `;

    clickSection.appendChild(newClick);
};



const intApp = () => {
    fetch('../data/product.json')
        .then(response => response.json())
        .then(data => {
            wrapper = data;
            addDataToHTML();
        });
};

intApp();
