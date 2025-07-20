let htmlreload = document.querySelector(".html-reload");
let cssreload = document.querySelector(".css-reload");
let jsreload = document.querySelector(".js-reload");
let htmlinput = document.querySelector(".html-editor textarea");
let csslinput = document.querySelector(".css-editor textarea");

let jslinput = document.querySelector(".js-editor textarea");
let save = document.querySelector("#save");
let outputContainer = document.querySelector(".output-container");
let output = document.querySelector("#output");
let full = document.querySelector("#full");
let copy = document.querySelectorAll(".copy");




save.addEventListener('click', () => {
    //this for html
    output.contentDocument.body.innerHTML = htmlinput.value;
    //this for css
    output.contentDocument.head.innerHTML = `<style>${csslinput.value}</style>`;
    output.contentWindow.eval(jslinput.value);
});
//.head.innerHTML	Tab use karte hain jab <style>, <script>, <meta> set karna ho

full.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    ///this logic for rotated icon
    if (outputContainer.classList.contains("output-full-active")) {
        full.style.transform = "rotate(180deg)"
    } else {
        full.style.transform = "rotate(0deg)"
    }
})


//copy
copy.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.classList.contains("copy1")) {
            navigator.clipboard.writeText(htmlinput.value)
        }
        else if (e.classList.contains("copy2")) {
            navigator.clipboard.writeText(csslinput.value)
        }
        else {
            navigator.clipboard.writeText(jslinput.value)
        }
    })

})

//reloader
htmlreload.addEventListener("click", () => {
    htmlinput.value = "";
    //rotate reoader
    htmlreload.classList.add("rotate-on-click");
    htmlreload.addEventListener("animationend", () => {
        htmlreload.classList.remove("rotate-on-click")
    }, { once: true })
})
cssreload.addEventListener("click", () => {
    csslinput.value = "";
    //rotated reloader
    cssreload.classList.add("rotate-on-click");
    cssreload.addEventListener("animationend", () => {
        cssreload.classList.remove("rotate-on-click")
    }, { once: true })
})
jsreload.addEventListener("click", () => {
    jslinput.value = "";
    jsreload.classList.add("rotate-on-click");
    jsreload.addEventListener("animationend", () => {
        jsreload.classList.remove("rotate-on-click")
    }, { once: true })
})

//rotate reloader

