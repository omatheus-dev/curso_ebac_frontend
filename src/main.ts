function multiplicacao(numero1: number, numero2: number): number {
    const resultado = numero1 * numero2;
    return resultado;
}

console.log(multiplicacao(3, 4));



class Pessoa {
    nome: string;

    constructor(nome:string) {
        this.nome = nome;
    }
}

function dizOla():any {
    console.log(`Olá ${Pessoa}`);
}

const Matheus = new Pessoa('Matheus');
dizOla();




