const alunos = []
const alunos2 = alunos.map(function(nomeDoAluno, notaDoAluno) {
    return {
        nome: nomeDoAluno,
        nota: notaDoAluno,
    }
})

alunos2.push({
    nome: 'Matheus',
    nota: '6'
})
alunos2.push({
    nome: 'Joao',
    nota: '7'
})
alunos2.push({
    nome: 'Maria',
    nota: '3'
})
alunos2.push({
    nome: 'Paulo',
    nota: '5'
})
alunos2.push({
    nome: 'Lara',
    nota: '10'
})
alunos2.push({
    nome: 'Luiz',
    nota: '2'
})

const alunoNaMedia = alunos2.filter(function(item) {
    return item.nota >= 6;
})
console.log(alunoNaMedia);