function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.dizOiPessoa = () => {
        console.log(`Eu me chamo ${this.nome} e tenho ${this.idade} anos`)
    }
}

function Aluno(nome, idade, ensino) {
    this.ensino = ensino;

    Pessoa.call(this, nome, idade)
    this.dizOiAluno = () => {
        console.log(`Eu me chamo ${this.nome}, tenho ${this.idade} anos e estudo na ${this.ensino}`)
    }
}

function Funcionário(nome, idade, cargo) {
    this.cargo = cargo;

    Pessoa.call(this, nome, idade)
    this.dizOiFuncionario = () => {
        console.log(`Eu me chamo ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.cargo}`)
    }
}

const Matheus = new Pessoa('Matheus', 18);
Matheus.dizOiPessoa();

const Maria = new Aluno('Maria', 14, 'EBAC');
Maria.dizOiAluno();

const José = new Funcionário('José', 27, 'Programador');
José.dizOiFuncionario();