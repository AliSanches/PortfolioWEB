
    function validar_form()
    {
        // Obter valores dos campos de nome e email
        var nome = form_envio.nome.value; // vai receber o valor dentro da tag form com name "form_envio" e input "nome"
        var email = form_envio.email.value; // vai receber o valor dentro da tag form com name "form_envio" e input "email"
        var mensagem = form_envio.mensagem.value;

        if(nome === " ") // Verifica se o campo nome está vazio
        {
            alert("O campo Nome é obrigatório!"); // vai estourar a mensagem na tela se estiver vazio
            form_envio.nome.focus(); // Quando der OK vai focar no input para que seja colocado o nome
            return false; // interrompe a execução da função
        }

        if(email === " ")
        {
            alert("O campo E-mail é obrigatório");
            form_envio.email.focus();
            return false;
        }
            
        if(mensagem == "")
        {
            lert("O campo Mensagem é obrigatório");
            form_envio.mensagem.focus();
            return false;
        }

        if(form_envio.email.value.indexOf("@") == -1 || form_envio.email.value.indexOf(".") == -1 || form_envio.email.value == "" || form_envio.email.value == null) // == -1 verifica se o caractere está presente na string, pois o indexOf retornará -1 se o caractere não for encontrado no input
        {
            alert("Por favor, indique um e-mail válido.");
            form_envio.email.focus();
            return false;
        }

    }