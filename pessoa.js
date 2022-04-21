var pessoa01 = {
    nome: "Ewerton", 
    idade: 30,
    filiacao: ["Josiberto Batista", "Dienes Yeras"],
    endereco: {
        rua: "Rua da Alegria",
        bairro: "Bessa",
        cidade: "Joao Pessoa"
    },
    dadosCompletos1: function() {
      if(this.nome == String && this.idade == Number && this.filiacao == Array && this.endereco == Object)
        return false;
        return true
    }
}


var pessoa02 = {
    nome: "Enzo Alexander",
    idade: 8,
    filiacao: ["Ewerton Oliveira", "Rubia Lopes"],
    endereço: {
        rua: "Rua da Felicidade",
        bairro: "Manaira",
        cidade: "Joao Pessoa"
    },
    dadosCompletos2: function() {
      if(this.nome == String && this.idade == Number && this.filiacao == Array && this.endereco == Object)
      return false;
      return true;
    }
}

function resultado() {
  
}

console.log(pessoa01.dadosCompletos1())
console.log(pessoa02.dadosCompletos2())

