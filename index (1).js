var pessoa = new Object();
pessoa.nome = pessoa.nome;
parseInt(pessoa.idade);
pessoa.filiacao = Array(2).fill(0);

var endereco = new Object();
endereco.rua = endereco.rua;
endereco.cidade = endereco.cidade;
endereco.estado = endereco.estado;

function dadosCompletos() {
    if (pessoa.nome == "" || pessoa.nome == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa.idade == "" || pessoa.idade == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa.filiacao[0] == "" || pessoa.filiacao[0] == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa.filiacao[1] == "" || pessoa.filiacao[1] == null) {
        console.log("Dados Inválidos!\n");

    }
    if (endereco.rua == "" || endereco.rua == null) {
        console.log("Dados Inválidos!\n");
    }
    if (endereco.cidade == "" || endereco.cidade == null) {
        console.log("Dados Inválidos!\n");
    }
    if (endereco.estado == "" || endereco.estado == null) {
        console.log("Dados Inválidos!\n");
    }  
    else {
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("⬆︎ Todos os dados estão CORRETOS! ⬆︎");
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
} 
function total() {
    pessoa.nome = "Ewerton Alexander";
    pessoa.idade = 35;
    pessoa.filiacao[0] = "Josiberto Batista";
    pessoa.filiacao[1] = "Dienes Yeras";
    endereco.rua = "Av. Epitácio Pessoa";
    endereco.cidade = "João Pessoa";
    endereco.estado = "Paraíba";

    console.log("Pessoa 01:\n\nNome: " + pessoa.nome + "\n⬆︎ Tipo: " + typeof(pessoa.nome));
    console.log("Idade: " + pessoa.idade + "\n⬆︎ Tipo: " + typeof(pessoa.idade));
    console.log("Nome do pai: " + pessoa.filiacao[0] + "\n⬆︎ Tipo: " + typeof(pessoa.filiacao[0]));
    console.log("Nome da mãe: " + pessoa.filiacao[1] + "\n⬆︎ Tipo: " + typeof(pessoa.filiacao[1]));
    console.log("Nome da rua: " + endereco.rua + "\n⬆︎ Tipo: " + typeof(endereco.rua));
    console.log("Nome da cidade: " + endereco.cidade + "\n⬆︎ Tipo: " + typeof(endereco.cidade));
    console.log("Nome do estado: " + endereco.estado + "\n⬆︎ Tipo: " + typeof(endereco.estado));

    dadosCompletos();
}

total();

var pessoa2 = new Object();
pessoa2.nome = pessoa2.nome;
parseInt(pessoa2.idade);
pessoa2.filiacao = Array(2).fill(0);

var endereco2 = new Object();
endereco2.rua = endereco2.rua;
endereco2.cidade = endereco2.cidade;
endereco2.estado = endereco2.estado;

function dadosCompletos2() {
    if (pessoa2.nome == "" || pessoa2.nome == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa2.idade == "" || pessoa2.idade == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa2.filiacao[0] == "" || pessoa2.filiacao[0] == null) {
        console.log("Dados Inválidos!\n");
    }
    if (pessoa2.filiacao[1] == "" || pessoa2.filiacao[1] == null) {
        console.log("Dados Inválidos!\n");

    }
    if (endereco2.rua == "" || endereco2.rua == null) {
        console.log("Dados Inválidos!\n");
    }
    if (endereco2.cidade == "" || endereco2.cidade == null) {
        console.log("Dados Inválidos!\n");
    }
    if (endereco2.estado == "" || endereco2.estado == null) {
        console.log("Dados Inválidos!\n");
    }  
    else {
      console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log("⬆︎ Todos os dados estão CORRETOS! ⬆︎");
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    }
} 
function total2() {
    pessoa2.nome = "Enzo Oliveira";
    pessoa2.idade = 8;
    pessoa2.filiacao[0] = "Ewerton Alexander";
    pessoa2.filiacao[1] = "Rúbia Lopes";
    endereco2.rua = "Av. Pedro II";
    endereco2.cidade = "João Pessoa";
    endereco2.estado = "Paraíba";

    console.log("\nPessoa 02:\n\nNome: " + pessoa2.nome + "\n⬆︎ Tipo: " + typeof(pessoa2.nome));
    console.log("Idade: " + pessoa2.idade + "\n⬆︎ Tipo: " + typeof(pessoa2.idade));
    console.log("Nome do pai: " + pessoa2.filiacao[0] + "\n⬆︎ Tipo: " + typeof(pessoa2.filiacao[0]));
    console.log("Nome da mãe: " + pessoa2.filiacao[1] + "\n⬆︎ Tipo: " + typeof(pessoa2.filiacao[1]));
    console.log("Nome da rua: " + endereco2.rua + "\n⬆︎ Tipo: " + typeof(endereco2.rua));
    console.log("Nome da cidade: " + endereco2.cidade + "\n⬆︎ Tipo: " + typeof(endereco2.cidade));
    console.log("Nome do estado: " + endereco2.estado + "\n⬆︎ Tipo: " + typeof(endereco2.estado));

    dadosCompletos2();
}

total2();