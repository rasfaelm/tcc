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
	<script src="main.js"></script>
<link rel="stylesheet" href="../css/cabecalho.css">
<link rel="stylesheet" href="../css/calculadora.css">
</head>
<body>
<script src="../JS/incluiCabecalho.js"></script>
    <script src="../JS/controladorDeFonte.js"></script>

        <div class="calculator" id="calculator">
            <img src="../images/X.png" width="20" height="20" onclick="close_calculadora()" alt="Fechar Calculadora">
            <input type="text" id="screen" maxlength="20">
            <div class="calc-buttons">
            <div class="functions-one">
                <button class="button triggers">C</button>
                <button class="button basic-stuff">(</button>
                <button class="button basic-stuff">)</button>
                <button class="button numbers">7</button>
                <button class="button numbers">8</button>
                <button class="button numbers">9</button>
                <button class="button numbers">4</button>
                <button class="button numbers">5</button>
                <button class="button numbers">6</button>
                <button class="button numbers">1</button>
                <button class="button numbers">2</button>
                <button class="button numbers">3</button>
                <button class="button basic-stuff">±</button>
                <button class="button numbers">0</button>
                <button class="button basic-stuff">.</button>
            </div>
                <div class="functions-two">
                    <button class="button triggers">&#60;=</button>
                    <button class="button complex-stuff">%</button>
                    <button class="button complex-stuff">x !</button>
                    <button class="button complex-stuff">x^</button>
                    <button class="button basic-stuff">*</button>
                    <button class="button basic-stuff">/</button>
                    <button class="button complex-stuff">ln</button>
                    <button class="button complex-stuff">e</button>
                    <button class="button basic-stuff">+</button>
                    <button class="button complex-stuff">x ²</button>
                    <button class="button complex-stuff">log</button>
                    <button class="button complex-stuff">cos</button>
                    <button class="button basic-stuff">-</button>
                    <button class="button complex-stuff">√</button>
                    <button class="button complex-stuff">sin</button>
                    <button class="button complex-stuff">tan</button>
                    <button class="button triggers">=</button>
                    <button class="button complex-stuff">&#x003C0;</button>
                    <button class="button complex-stuff">∘</button>
                    <button class="button complex-stuff">rad</button>
                </div>
            </div>
        </div>
<!-- Modal -->
<div id="ReplyModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Reply Question</h4>
      </div>
      <div class="modal-body">
        <form name="frm1" method="post">
            <input type="hidden" id="commentid" name="Rcommentid">
        	<div class="form-group">
        	  <label for="usr">Write your name:</label>
        	  <input type="text" class="form-control" name="Rname" required>
        	</div>
            <div class="form-group">
              <label for="comment">Write your reply:</label>
              <textarea class="form-control" rows="5" name="Rmsg" required></textarea>
            </div>
        	 <input type="button" id="btnreply" name="btnreply" class="btn btn-primary" value="Reply">
      </form>
      </div>
    </div>

  </div>
</div>

<div class="container">

<div class="panel panel-default" style="margin-top:50px">
  <div class="panel-body">
    <h3>Community forum</h3>
    <hr>
    <form name="frm" method="post">
        <input type="hidden" id="commentid" name="Pcommentid" value="0">
	<div class="form-group">
	  <label for="usr">Write your name:</label>
	  <input type="text" class="form-control" name="name" required>
	</div>
    <div class="form-group">
      <label for="comment">Write your question:</label>
      <textarea class="form-control" rows="5" name="msg" required></textarea>
    </div>
	 <input type="button" id="butsave" name="save" class="btn btn-primary" value="Send">
  </form>
  </div>
</div>
  

<div class="panel panel-default">
  <div class="panel-body">
    <h4>Recent questions</h4>           
	<table class="table" id="MyTable" style="background-color: #edfafa; border:0px;border-radius:10px">
	  <tbody id="record">
		
	  </tbody>
	</table>
  </div>
</div>

</div>

</body>
</html>