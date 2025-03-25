let p1 = document.getElementById('p1').innerHTML;
console.log(p1);

document.getElementById('p1').innerHTML = "Olá Mundo!"

//exemplo 1 
let nome = prompt("Qual o seu Nome?");
let idade = prompt("Qual a sua idade?");
let ano_atual = 2025;
let ano_nascimento = ano_atual - idade;

let resposta = "olá " + nome + ", seu ano de nascimento é " + ano_nascimento + "!";
document.getElementById('exc1').innerHTML = resposta

//exemplo de funcão

function imprimeMensagem(msg){
    console.log(msg)
}

imprimeMensagem("mensagem 1")
imprimeMensagem("mensagem 2")
imprimeMensagem("mensagem 3")

//exemplo de função soma

function soma(n1,n2){
    return n1 + n2;
}

let c = soma(3,4);
console.log("A soma de 3 e 4 é =",c);

//exemplo 2

function ex2(){
    let num = parseInt(document.getElementById('exc2_in').value);
    console.log("incrementos " + num);
    for(let i = 0; i <= num; i++){
        console.log(i);
    }
}

//exeplo 3

function ex3(){
    let num1 = document.getElementById('exc3_1').value;
    let num2 = document.getElementById('exc3_2').value;
    let num3 = soma(num1,num2);
    console.log(num3);
    document.getElementById('exc3_resp').innerHTML = "A soma de " + num1 + " e " + num2 + " é " + num3;
}   

//exemplo 4

function ex4(){
    let nume1 = document.getElementById('exc4_1').value;
    let nume2 = document.getElementById('exc4_2').value;

    let result = 0;
    if(num1 < 0 || num2 < 0){
        result = soma(nume1,nume2)

    }
}