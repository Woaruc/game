const snoyb = document.getElementById("snoyb");
const kust = document.getElementById("kust");

document.addEventListener("keydown", function(event){
    jump();
});

function jump (){
    if (snoyb.classList != "jump"){
        snoyb.classList.add("jump")
    }

    setTimeout(function(){
        snoyb.classList.remove("jump")
    },350)
}

let isAlive = setInterval ( function () {
    let snoybTop = parseInt(window.getComputedStyle(snoyb).getPropertyValue("top"));
    let kustLeft = parseInt(window.getComputedStyle(kust).getPropertyValue("left"));

    if (kustLeft < 50 && snoybTop >= 140) {
        alert("Game Ower!")
    }
}, 10)
