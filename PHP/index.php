<!DOCTYPE html>
<html>
<head>
<link rel="icon" href="./images/favicon.png" type="image/png" sizes="16x16">
<title>forum</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="./Css/calculadora.css">
  <link rel="stylesheet" href="./Css/style.css">
  <script src="forum.js"></script>
  <style>
    .container {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }

        p {
            font-size: 18px;
            line-height: 1.6;
            margin-top: 20px;
        }
  </style>
</head>

<body>
    <div class="container">
            <h2>Bem vindo(a) ao Fórum!</h2>
            <img src="./images/cefetmat.png" style="display: block; margin: 0 auto; height: 400px; border-radius: 5px;">
                <div>
                    <p>Neste espaço, você encontrará um ambiente dedicado a discutir e explorar o fascinante mundo da Matemática.
                        Este é o lugar perfeito para compartilhar conhecimentos, fazer perguntas e aprender juntos.</p><br><br>  
                </div>
    </div>
<!-- Modal -->
<div id="ReplyModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Responda a dúvida</h4>
      </div>
      <div class="modal-body">
        <form name="frm1" method="post">
            <input type="hidden" id="commentid" name="Rcommentid">
        	<div class="form-group">
        	  <label for="usr">Resposta:</label>
        	  <input type="text" class="form-control" name="Rname" required>
        	</div>
            <div class="form-group">
              <label for="comment">Explicação:</label>
              <textarea class="form-control" rows="5" name="Rmsg" required></textarea>
            </div>
        	 <input type="button" id="btnreply" name="btnreply" class="button" value="Responder">
      </form>
      </div>
    </div>
  </div>
</div>

<div class="container">

<div class="panel panel-default" style="margin-top:50px">
  <div class="panel-body">
    <h3>Envie sua dúvida!</h3>
    <hr>
    <form name="frm" method="post">
        <input type="hidden" id="commentid" name="Pcommentid" value="0">
	<div class="form-group">
	  <label for="usr">Título da pergunta:</label>
	  <input type="text" class="form-control" name="name" required>
	</div>
    <div class="form-group">
      <label for="comment">Descrição:</label>
      <textarea class="form-control" rows="5" name="msg" required></textarea>
    </div>
	 <input type="button" id="butsave" name="save" class="btn btn-primary" value="Enviar">
  </form>
  </div>
</div>
  

<div class="panel panel-default">
  <div class="panel-body">
    <h4>Perguntas recentes</h4>           
	<table class="table" id="MyTable" style="background-color: #edfafa; border:0px;border-radius:10px">
	  <tbody id="record">
	  </tbody>
	</table>
  </div>
</div>

</div>

</body>
</html>