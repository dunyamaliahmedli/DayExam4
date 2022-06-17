let btn = document.querySelectorAll(".ss");
let imgs = document.querySelectorAll(".portofiloimg");
let btn1 = document.querySelector(".ss1");

btn.forEach(x => {
    x.addEventListener("click", function () {
        let id = this.getAttribute("data-target");
        imgs.forEach(y => {
            let imgsId = y.getAttribute("data-id");


            if (id == imgsId) {
                y.style.display = "block";
            }
            else
                y.style.display = "none";

        })
    })
})

btn1.addEventListener("click", function () {
    imgs.forEach(y => {
        y.style.display = "block";
    })
})