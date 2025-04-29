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

//------------ Aula10 -------------

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


    //------------ Aula11 -------------

    var data = {db_nome: Nome,db_login: Login,db_senha: Senha,db_nasc: Nasc}
    usuario.insertOne(data,function(err){
        console.log(err)
      if (err) {
        resposta.render("resposta",{status:"Erro" ,Nome,Login,Senha,Nasc});
      }else {
        resposta.render("resposta",{status:"Sucesso" ,Nome,Login,Senha,Nasc});        
      };
    });
    
    resposta.render("resposta",{Nome,Login,Senha,Nasc});
    
})

app.get("/for_ejs", function(requisicao, resposta){
    let valor = requisicao.query.valor;
    resposta.render("for",{valor});
})
//--------------------------------


//------------ LAB08 -------------


app.get("/cadastro", function(requisicao, resposta){
    let Nome = requisicao.query.Nome;
    let Senha = requisicao.query.Senha;

    console.log(Nome,Senha)
    resposta.render("Resp0sta",{Nome,Senha});
})

app.post("/login", function(requisicao,resposta){
    let Nome = requisicao.body.Nome;
    let Senha = requisicao.body.Senha;

    console.log(Nome,Senha);

    resposta.render("Resp0sta",{Nome,Senha});
})

//--------------------------------

//------------ Aula11 -------------

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = 'mongodb+srv://Hatila:8esmyAo4IK5oB1jS@cluster0.crpkhxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var customers = dbo.createCollection("customers",);