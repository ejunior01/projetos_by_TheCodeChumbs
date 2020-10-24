// Função utilizada para contar a quantidade de Caracteres, e alterar a cor confore uma quantidade.
var x = document.getElementById("input-text").value

function letter_length() {
    var x = document.getElementById("input-text").value.trim()

    document.getElementById("p-input").innerHTML = x.length

    if (x.length < 15) {
        document.getElementById("header-color").style.backgroundColor = "#19A6FF"
    }
    else if (x.length < 25) {
        document.getElementById("header-color").style.backgroundColor = "#FFFC19"
    }
    else if (x.length < 35) {
        document.getElementById("header-color").style.backgroundColor = "#0971B3"
    }
    else if (x.length < 45) {
        document.getElementById("header-color").style.backgroundColor = "#FFFC19"
    }
    else if (x.length > 55) {
        document.getElementById("header-color").style.backgroundColor = "#FF0201"
   }
}

function limpar() {
    document.getElementById("input-text").value = ''
    document.getElementById("p-input").innerHTML = ''
    document.getElementById("header-color").style.backgroundColor = "#FF0201";
}

