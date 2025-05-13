// window.alert("OLÁ");
console.log("olá!");

//let nome=prompt("qual p seu nome:");
//console.log(nome);

let i=0;
while(i<10){
    console.log(i);
    //i++;
    // i=i+1;
    i+=1;
}

for(let i =0;i<10;i++){
    console.log(i);
}

console.log("execicio 1")
for(let i = 1; i < 100; i+=2){
    console.log(i)
}

console.log("execicio 2")
for(let i =5;i<=500;i+=5){
    console.log(i)
}

console.log("execicio 3")
let numero=prompt("Digie um numero:")
console.log(numero)
if(numero<0){
    console.log("numero invalido")
}
for(let i=numero; i>=0;i--){
    console.log(i)
}

console.log("execicio 4")
let x=prompt("Digie um numero:")
console.log(x)
let mult=1;
for(let i=x;i>0;i--){
    mult *= i;
    console.log(mult)
}