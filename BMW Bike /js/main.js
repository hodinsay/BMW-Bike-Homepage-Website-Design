const redBtn = document.querySelector("#red")
const blueBtn = document.querySelector("#blue")
const blackBtn = document.querySelector("#black")
const bike = document.querySelector(".container")

redBtn.addEventListener("click", () =>{
    bike.style.backgroundImage = "url(img/BMW1.png)";
});

blueBtn.addEventListener("click", () =>{
    bike.style.backgroundImage = "url(img/BMW2.png)";
});

blackBtn.addEventListener("click", () =>{
    bike.style.backgroundImage = "url(img/BMW3.png)";
});