function dados(nome) {
    if (nome === "Luysa") {
        alert("Bem vinda de volta, Luysa")
    } else {
        confirm("Vamos fazer seu cadastro?")
    }
}

dados((prompt("Diga seu nome")));

let p1 = document.getElementsByTagName('p')[1]
document.write('Está escrito assim: ' + p1.innerHTML)

var corpo = document.body
corpo.style.background = 'black'

var d = document.querySelector('div#div')
d.style.background = 'red'


