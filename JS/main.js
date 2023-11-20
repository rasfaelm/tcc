var myVar = setInterval(LoadData, 2000);

http_request = new XMLHttpRequest();

function LoadData(){
$.ajax({
url: 'view.php',
type: "POST",
dataType: 'json',
success: function(data) {
    $('#MyTable tbody').empty();
    for (var i=0; i<data.length; i++) {
        var commentId = data[i].id;
        if(data[i].parent_comment == 0){
        var row = $('<tr><td><b><img src="avatar.jpg" width="30px" height="30px" />' + data[i].title + ' :<i> '+ data[i].date + ':</i></b></br><p style="padding-left:80px">' + data[i].post + '</br><a data-toggle="modal" data-id="'+ commentId +'" title="Add this item" class="open-ReplyModal" href="#ReplyModal">Responder</a>'+'</p></td></tr>');
        $('#record').append(row);
        for (var r = 0; (r < data.length); r++)
                {
                    if ( data[r].parent_comment == commentId)
                    {
                        var comments = $('<tr><td style="padding-left:80px"><b><img src="avatar.jpg" width="30px" height="30px" />' + data[r].title + ' :<i> ' + data[r].date + ':</i></b></br><p style="padding-left:40px">'+ data[r].post +'</p></td></tr>');
                        $('#record').append(comments);
                    }
                }
        }
    }
},
error: function(jqXHR, textStatus, errorThrown){
    alert('Erro: ' + textStatus + ' - ' + errorThrown);
}
});
}

$(document).on("click", ".open-ReplyModal", function () {
     var commentid = $(this).data('id');
     $(".modal-body #commentid").val( commentid );
});

$(document).ready(function() {
	$('#butsave').on('click', function() {
		$("#butsave").attr("disabled", "disabled");
		var id = document.forms["frm"]["Pcommentid"].value;
		var name = document.forms["frm"]["name"].value;
		var msg = document.forms["frm"]["msg"].value;
		if(name!="" && msg!=""){
			$.ajax({
				url: "save.php",
				type: "POST",
				data: {
					id: id,
					name: name,
					msg: msg,			
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						document.forms["frm"]["Pcommentid"].value = "";
						document.forms["frm"]["name"].value = "";
						document.forms["frm"]["msg"].value = "";
						LoadData(); 						
					}
					else if(dataResult.statusCode==201){
					   alert("Erro ocorreu!!");
					}
					
				}
			});
		}
		else{
			alert('Por favor, preencha todos os campos!');
		}
	});
});

$(document).ready(function() {
	$('#btnreply').on('click', function() {
		$("#btnreply").attr("disabled", "disabled");
		var id = document.forms["frm1"]["Rcommentid"].value;
		var name = document.forms["frm1"]["Rname"].value;
		var msg = document.forms["frm1"]["Rmsg"].value;
		if(name!="" && msg!=""){
			$.ajax({
				url: "save.php",
				type: "POST",
				data: {
					id: id,
					name: name,
					msg: msg,			
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#btnreply").removeAttr("disabled");
						document.forms["frm1"]["Rcommentid"].value = "";
						document.forms["frm1"]["Rname"].value = "";
						document.forms["frm1"]["Rmsg"].value = "";
						LoadData(); 
						$("#ReplyModal").modal("hide");
					}
					else if(dataResult.statusCode==201){
					   alert("Erro ocorreu!!");
					}
					
				}
			});
		}
		else{
			alert('Por favor, preencha todos os campos!');
		}
	});
});

/*
1. `setInterval(LoadData, 2000)`: Esta linha define um intervalo de tempo de 2000 milissegundos (2 segundos) para chamar repetidamente a função `LoadData`. Isso é usado para atualizar dinamicamente o conteúdo do fórum a cada 2 segundos.
2. `LoadData()`: Esta função é chamada a cada 2 segundos para carregar os dados do fórum do servidor usando uma solicitação Ajax. A função realiza o seguinte:
   - Faz uma solicitação Ajax para o servidor para obter os dados do fórum.
   - Limpa o conteúdo da tabela com `$('#MyTable tbody').empty()` para preparar o espaço para os novos dados.
   - Itera sobre os dados recebidos e cria elementos HTML para exibir as perguntas e respostas no fórum.
   - Adiciona esses elementos à tabela no elemento com `id="record"`.
3. `$(document).on("click", ".open-ReplyModal", function () { ... })`: Este é um evento jQuery que é acionado quando um usuário clica em um link "Reply" para responder a uma pergunta. Ele abre o modal de resposta e define o valor do campo `commentid` no modal com o ID do comentário que está sendo respondido.
4. `$(document).ready(function() { ... })`: Estas são funções jQuery que são executadas quando o documento HTML é completamente carregado.
   - A primeira função lida com o envio de uma nova pergunta no fórum. Ela faz uma solicitação Ajax para salvar os dados no servidor quando o usuário clica em "Send" no formulário.
   - A segunda função lida com o envio de respostas a perguntas existentes. Ela faz uma solicitação Ajax para salvar os dados de resposta no servidor quando o usuário clica em "Responder" no modal de resposta.
No geral, esse código JavaScript permite que os usuários enviem perguntas e respostas em um fórum, carreguem dinamicamente as últimas perguntas e respostas sem recarregar a página e respondam a perguntas existentes usando um modal de resposta. O servidor lida com a persistência dos dados no banco de dados e
 fornece as informações para o cliente através de solicitações Ajax.*/