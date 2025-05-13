require ("colors");
var http = require("http");
var express = require("express");

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);
//------------ Aula11 -------------

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = 'mongodb+srv://Hatila:8esmyAo4IK5oB1jS@cluster0.crpkhxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_bd");
var usuario = dbo.collection("customers");
var blog = dbo.collection("Posts");
var log = dbo.collection("logs");
var carro = dbo.collection("carros")

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

// Aula11

app.post('/logar', function(requisicao, resposta){
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    console.log(login, senha);

    var data = {db_login: login, db_senha: senha}

    usuario.find(data).toArray(function(err, items){
        console.log(items)
        if(items.length == 0){
            resposta.render("resposta_login",{status: "usuario/senha não encontrado"});
        }else if(err){
            resposta.render("resposta_login",{status: "erro ao logar"});
        }else{
            resposta.render("resposta_login",{status: "usuario "+login+" logado"});
        }
    })

})

// ---- LAB09 ----

app.post("/post", function(req, res) {
    let titulo = req.body.titulo;
    let resumo = req.body.resumo;
    let conteudo = req.body.conteudo;

    let novoPost = {
        db_Titulo: titulo,
        db_Resumo: resumo,
        db_Conteudo: conteudo
    };

    blog.insertOne(novoPost, function(err, result) {
        if (err) {
            res.render("postado", {
                status: "Erro ao inserir o Post",
                titulo: "",
                resumo: "",
                conteudo: ""
            });
        } else {
            res.render("postado", {
                status: "POST postado com sucesso",
                titulo: titulo,
                resumo: resumo,
                conteudo: conteudo
            });
        }
    });
});

app.get('/blog', async (req, res) => {
    try {
        const posts = await blog.find().toArray();
        res.render('blog', { posts, status: null, titulo: null, resumo: null, conteudo: null });
    } catch (err) {
        res.send('Erro ao buscar posts');
    }
});
// ---- ---- ---

// --- aula 12 ---

app.post("/atualizar_senha", function(requisicao,resposta){
    let login = requisicao.body.login;
    let senha = requisicao.body.senha;
    let novasenha = requisicao.body.novasenha;

    let data = {db_login: login,db_senha: senha,db_novasenha: novasenha}
    let new_data = {$set: {db_senha: novasenha}}

    usuario.updateOne(data,new_data, function(err,result){
        if (result.modifiedCount == 0){
            resposta.render("resposta_login", {status: "usuario/senha não encontrado"})
        }else if (err){
            resposta.render("resposta_login",{status: "erro ao logar"});
        }else {
            resposta.render("resposta_login",{status: "usuario "+login+" logado"});
        }
    });
})

app.get("/posts", function(req, res) {
    blog.find({}).toArray(function(err, items) {
        if (err) {
            res.render("blog", { status: "Erro ao buscar posts", posts: [] });
        } else {
            res.render("blog", { status: "Lista de Posts", posts: items });
        }
    });
});


// ---------------- LAB 10 ----------------

app.post("/cad10", function(req, res){
    let nome = req.body.nome;
    let login = req.body.login;
    let senha = req.body.senha;

    var data = {db_nome: nome, db_login: login, db_senha: senha};



    log.insertOne(data, function(err,result){
        console.log(log)
        if (err){
            res.render("cad10",{
                Status: "Não foi Possivel Cadastrar"
            })
        } else{
            res.rander("cad10",{
                Status: "Cadastro Realizado com Sucesso"
            })
        }
    })

    log.find({}).toArray((err, result)) => {
        if (err){
            res.render("cad10",{
                Status: "Não foi Possivel Cadastrar"
            })
        } else{
            res.rander("cad10",{
                Status: "Cadastro Realizado com Sucesso"
            })
        }
    })
})

