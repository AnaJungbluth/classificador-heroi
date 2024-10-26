const prompt = require('prompt-sync')();

let nivel_heroi
let nome_heroi = null
let xp_heroi = null

while (true) {
    nome_heroi = prompt("Informe o nome do herói (ou digite 'nenhum' para sair): ")
    if (nome_heroi === "nenhum") {
        console.log("Encerrando...");
        break;
    }
    xp_heroi = prompt(`Informe a quantidade de xp do herói de nome ${nome_heroi}: `)

    //Se XP for menor do que 1.000 = Ferro
    if (xp_heroi < 1000) {
        nivel_heroi = "Ferro"
    }
    //Se XP for entre 1.001 e 2.000 = Bronze
    else if (xp_heroi > 1000 && xp_heroi <= 2000) {
        nivel_heroi = "Bronze"
    }
    //Se XP for entre 2.001 e 5.000 = Prata
    else if (xp_heroi > 2000 && xp_heroi <= 5000) {
        nivel_heroi = "Prata"
    }
    //Se XP for entre 5.001 e 7.000 = Ouro
    else if (xp_heroi > 5000 && xp_heroi <= 7000) {
        nivel_heroi = "Ouro"
    }
    //Se XP for entre 7.001 e 8.000 = Platina
    else if (xp_heroi > 7000 && xp_heroi <= 8000) {
        nivel_heroi = "Platina"
    }
    //Se XP for entre 8.001 e 9.000 = Ascendente
    else if (xp_heroi > 8000 && xp_heroi <= 9000) {
        nivel_heroi = "Ascendente"
    }
    //Se XP for entre 9.001 e 10.000= Imortal
    else if (xp_heroi > 9000 && xp_heroi <= 10000) {
        nivel_heroi = "Imortal"
    }
    //Se XP for maior ou igual a 10.001 = Radiante
    else if (xp_heroi > 10000) {
        nivel_heroi = "Radiante"
    } else {
        nivel_heroi = "Não especificado"
    }

    console.log(' ')
    console.log(`O Herói de nome ${nome_heroi} está no nível de ${nivel_heroi}`)
    console.log(' ')
}

