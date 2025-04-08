

let canvas1 = document.getElementById('canvas1');
let ctx = canvas1.getContext('2d');

function desenhar_quadrado(cor,cor2,x,y,width,height,a,b,w,h){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor2;
    ctx.fillRect(x,y,width,height);
    ctx.strokeRect(a,b,w,h);
    ctx.closePath()
    }
let retangulo = desenhar_quadrado('blue','red',150,150,20,20)


document.addEventListener('mousemove', function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse)

    retangulo.x = x_mouse;
    retangulo.y = y_mouse;

})