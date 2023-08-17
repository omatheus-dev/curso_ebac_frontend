function mutiplicacao(numero1: number, numero2: number): number {
    const resultado = numero1 * numero2;
    return resultado;
}

console.log(mutiplicacao(3, 4));



class Pessoa {
    nome: string;

    constructor(nome:string) {
        this.nome = nome;
    }

    dizOla():any {
        console.log(`Olá ${this.nome}`);
    }
}

const Matheus = new Pessoa('Matheus');
Matheus.dizOla();


