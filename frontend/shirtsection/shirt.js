  fetch('../header.html')
            .then(res => res.text())
            .then(data => {
                document.getElementById('main').innerHTML = data;

                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const scripts = doc.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    newScript.text = script.textContent;
                    document.body.appendChild(newScript);
                });

                if (typeof window.initSearch === 'function') {
                    console.log("initSearch mil gaya, call kar rahe hain");
                    window.initSearch();
                } else {
                    console.error("initSearch function nahi mila!");
                }
            })
            .catch(err => console.error("Header fetch karne mein error:", err));
        //end


        const mainImg = document.querySelector("#main-img");
        const thumbnails = document.querySelectorAll(".click-color img");

        thumbnails.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                mainImg.src = thumb.src;
            });
        });


        const sizeText = document.getElementById("size-text");
        const clickSize = document.querySelectorAll(".click-size span")

        clickSize.forEach((size) => {

            size.addEventListener("click", () => {
                sizeText.textContent = "Select : " + size.textContent
            })
        })