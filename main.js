$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault ();

        const inserirTarefa = $('#inserir-tarefa').val();
        const novoItem = $(`<li> ${inserirTarefa} </li>`);
        $(novoItem).appendTo('ul');
    })

    $('ul').click('li', function () {
        
    })
})

