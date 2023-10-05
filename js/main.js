$(document).ready(function() {

    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            cpf: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
            },
            endereco: {
                required: true,
            }, cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo'
        },
        submitHandler: function(form) {
            const nome = $('#nome').val();
            const cpf = $('#cpf').val();
            const email = $('#email').val();
            const telefone = $('#telefone').val();
            const endereco = $('#endereco').val();
            const cep = $('#cep').val();
            
            const mensagem = `Seu cadastro foi realizado com sucesso! Os dados preenchidos são:\nNome: ${nome}\nCPF: ${cpf}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nCEP: ${cep}`;
            alert(mensagem);

            form.reset();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        },
    })
}) 