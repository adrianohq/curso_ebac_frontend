$(document).ready(function() {
    $("#form-tarefas").submit(function(e) {
        e.preventDefault();

        var nomeNovaTarefa = $("#nova-tarefa").val();

        var novaTarefa = $("<li>").text(`-${nomeNovaTarefa}`);
        $("#lista-tarefas").append(novaTarefa);

        $("#nova-tarefa").val("");

        novaTarefa.click(function() {
            $(this).toggleClass("completed");
        });

        $("#botao-limpar").click(function() {
            $("#lista-tarefas").empty()
        })
    });
});

