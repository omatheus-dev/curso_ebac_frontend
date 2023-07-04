$(document).ready(function() {
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            }, 
            endereço: {
                required: true
            },
            cep: {
                required: true
            },
        },
        messages: {
            nome: 'Esse campo é obrigatório',
            email: 'Esse campo é obrigatório',
            telefone: 'Esse campo é obrigatório',
            cpf: 'Esse campo é obrigatório',
            endereço: 'Esse campo é obrigatório',
            cep: 'Esse campo é obrigatório',
        },
        submitHandler: function(form) {
            console.log(form)
        },
    })
})