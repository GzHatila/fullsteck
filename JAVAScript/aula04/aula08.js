let carro = {
    cor: 'green',
    modelo: 'SUV',
    marca: 'Toyota',
    buzina: function(){
        return ('bii bii')
    }

}

console.log(carro);
console.log(carro.cor)
console.log(carro.buzina())

let carro2 = {
    cor: 'Black',
    modelo: 'SUV',
    marca: 'FORD',
    buzina: function(){
        return ('fom fom')
    }
}
console.log(carro2.buzina())

let carros = []
carros.push(carro)
carros.push(carro2)
for(let i = 0; i < carros.length; i++){
    console.log(carros[i].buzina())
}

class Carro {
    constructor(cor,modelo,marca){
        this.cor = cor;
        this.modelo = modelo;
       this.marca = marca;
    }
    buzina(){
        return 'bii bii'
    }
}

let carro1 = new Carro('green','SUV','toyota');
console.log(carro1)
//carro1.cor = 'green'
//console.log(carro1)

let carro3 = new Carro('black','SUV','FORD')
console.log(carro3)


class retangulo{
    constructor(cor_linha,cor_preenchimento,espessura_linha,x,y,largura,altura){
        this.cor_linha = cor_linha;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x; 
        this.y = y;
        this.altura = altura;
        this.largura = largura;

    }
    desenhe(contexto){
        contexto.beginPath();
        contexto.lineWidth = this.espessura_linha;
        contexto.fillStyle = this.cor_preenchimento;
        contexto.fillRect(this.x,this.y,this.largura,this.altura) ;
        contexto.closePath();
    }
}

let canvas1 = document.getElementById('canvas1');
let ctx1 = canvas1.getContext('2d');

let retangulo1 = new retangulo('blue','red',3,0,0,20,20);
let retangulo2 = new retangulo('blue','green', 3 , 200,200,20,20);
let retangulo3 = new retangulo('blue','blue', 3 , 100,100,20,20);
retangulo1.desenhe(ctx1)
retangulo2.desenhe(ctx1)
retangulo3.desenhe(ctx1)
//retangulo1.x = 100;
//retangulo1.desenhe(ctx1)

function animacao(){
    if(retangulo1.x == 400){
        retangulo1.x =0;
    }
    retangulo1.x +=1;
    ctx1.clearRect(0,0,400,400)
    retangulo1.desenhe(ctx1)
    retangulo2.desenhe(ctx1)
    retangulo3.desenhe(ctx1)

    requestAnimationFrame(animacao)
}

animacao()

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let velocidade = 15;
    if(tecla == 'ArrowUp'){ retangulo2.y -= velocidade}
    if(tecla == 'ArrowDown'){ retangulo2.y += velocidade}
    if(tecla == 'ArrowLeft'){ retangulo2.x -= velocidade}
    if(tecla == 'ArrowRight'){ retangulo2.x += velocidade}
})

document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse)

    retangulo3.x = x_mouse;
    retangulo3.y = y_mouse;

})

