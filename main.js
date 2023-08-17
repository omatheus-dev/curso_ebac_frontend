const alunos = [
    {
        nome: 'Matheus',
        nota: '6'
    },
    {
        nome: 'Joao',
        nota: '7'
    },
    {
        nome: 'Maria',
        nota: '3'
    },
    {
        nome: 'Paulo',
        nota: '5'
    },
    {
        nome: 'Lara',
        nota: '10'
    },
    {
        nome: 'Luiz',
        nota: '2'
    }
]

const alunoNaMedia = alunos.filter(function(item) {
    return item.nota >= 6;
})
console.log(alunoNaMedia);