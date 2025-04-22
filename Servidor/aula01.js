require ("colors");
var http = require("http");
var express = require("express");

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

let bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')
app.set('views', './views');

console.log("Servidor Rodando".rainbow);    

// Metodos e actions

app.get("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB/index.html");
})

app.post("/inicio", function(requisicao, resposta){
    resposta.redirect("LAB/index.html");
})

app.get("/cadastrar", function(requisicao, resposta){
    let Nome = requisicao.query.Nome;
    let Login = requisicao.query.Login;
    let Senha = requisicao.query.Senha;
    let Nasc = requisicao.query.nascimento;

    console.log(Nome,Login,Senha,Nasc)
})

app.post("/cadastrar", function(requisicao,resposta){
    let Nome = requisicao.body.Nome;
    let Login = requisicao.body.Login;
    let Senha = requisicao.body.Senha;
    let Nasc = requisicao.body.nascimento;

    console.log(Nome,Login,Senha,Nasc);

    resposta.render("resposta",{Nome,Login,Senha,Nasc});
})