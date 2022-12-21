
function Roll_a_Dice(){
    const dice = document.querySelector("img");
    let ranNum = Math.floor(Math.random()*6+1);
    dice.setAttribute("src","dice"+ ranNum +".jpg");
}
