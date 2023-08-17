"use strict";
function multiplicacao(numero1, numero2) {
    const resultado = numero1 * numero2;
    return resultado;
}
console.log(multiplicacao(3, 4));
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        console.log(`Olá ${this.nome}`);
    }
}
const Matheus = new Pessoa('Matheus');
Matheus.dizOla();
