var background = document.getElementById("changer_color");
var color = ["#85D0FF","#FF0201","#FF6969","#FFFD82","#9C2CFF","#B38D52","#FF36A9","#36E8FF","#FF73BB"];

background.addEventListener('click', clicar)

function clicar() {
    var background_color = color[Math.floor(Math.random() * color.length)];
    document.getElementById("header-color").style.background = background_color
}