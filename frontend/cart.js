// cart.js
let selectedSize = null; // Global variable to track selected size

// Size selection logic
export function setupSizeSelection() {
    const sizeText = document.getElementById("size-text");
    const sizeSpans = document.querySelectorAll(".click-size span");

    sizeSpans.forEach((size) => {
        size.addEventListener("click", () => {
            // Remove 'selected' from all
            sizeSpans.forEach(s => s.classList.remove('selected'));
            // Mark clicked size as selected
            size.classList.add('selected');

            selectedSize = size.textContent; // Update global variable
            sizeText.textContent = "Selected: " + selectedSize;
        });
    });
}

// Add to Cart Function
export function setupAddToCart(productDetails) {
    const addBtn = document.getElementById("add-btn");

    if (!addBtn) {
        console.error("Add to Cart button not found!");
        return;
    }

    addBtn.addEventListener("click", () => {
        if (!selectedSize) {
            alert("Please select a size first.\nAvailable sizes: S, M, L, XL");
            return;
        }

        addToCartData(
            productDetails.id,
            productDetails.name,
            productDetails.image,
            productDetails.price,
            selectedSize
        );
    });
}

// Common Cart Data Function
function addToCartData(id, name, image, price, size) {
    let cart = JSON.parse(localStorage.getItem("cartData")) || [];

    const existingItem = cart.find(item => item.id === id && item.size === size);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, image, price, size, quantity: 1 });
    }

    localStorage.setItem("cartData", JSON.stringify(cart));
    updateCartCount();

    alert(`${name} (Size ${size}) added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const totalQty = cartData.reduce((sum, item) => sum + item.quantity, 0);

    const countEl = document.getElementById("cart-count");
    if (countEl) {
        countEl.innerText = totalQty > 0 ? totalQty : '';
        countEl.style.display = totalQty > 0 ? "inline-block" : "none";
    }
}
