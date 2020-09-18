let down = document.getElementById("down");
let up = document.getElementById("up");
let up1=document.querySelector(".up1")
let down1 = document.querySelector(".down1");


up.addEventListener("click", go_up);
down.addEventListener("click", go_down);

function go_down(e){
    let x = up1.offsetTop + down1.offsetTop;
    scrollBy({top:distance , behavior:"smooth" });
}


function go_up(e){
    let x = -(up1.offsetTop + down1.offsetTop);
    scrollBy({top:distance , behavior:"smooth" });
}

console.log("confirm");