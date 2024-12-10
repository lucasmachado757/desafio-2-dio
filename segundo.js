function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; 
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias > 100) {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel }; 
}


function iniciarCalculadora() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
        rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
            vitorias = parseInt(vitorias);  
            derrotas = parseInt(derrotas);  

            const resultado = calcularNivel(vitorias, derrotas); 

            console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} vitórias e está no nível de ${resultado.nivel}`);

            rl.close(); 
        });
    });
}

iniciarCalculadora();
