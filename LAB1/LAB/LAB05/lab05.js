const ex1=document.getElementById('ex1');

if (ex1.getContext){
    const ctx=ex1.getContext('2d')


function desenhar_quadrado(cor,cor2,x,y,width,height,a,b,w,h){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor2;
    ctx.fillRect(x,y,width,height);
    ctx.strokeRect(a,b,w,h);
    ctx.closePath()
    }

}
if (ex1.getContext){
    const ctx=ex1.getContext('2d')


function desenhar_linha(cor,cor2,x,y,a,b){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor2;
    ctx.moveTo(x,y);
    ctx.lineTo(a,b);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    }
}

if (ex1.getContext){
    const ctx=ex1.getContext('2d')


function desenhar_arco(cor,cor2,x,y,t,pi1,pi2){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor2;
    ctx.arc(x,y,t,pi1*Math.PI,pi2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    }
}

if (ex1.getContext){
    const ctx=ex1.getContext('2d')


function escrever(cor,cor2,e,x,y){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cor;
    ctx.strokeStyle = cor2;
    ctx.font = "90tpx Arial"
    ctx.textAlign = "center";
    ctx.fillText(e,x,y);
    ctx.strokeText(e,x,y)
    ctx.closePath();

    }
}




desenhar_quadrado('blue','',0,0,50,50)
desenhar_quadrado('red','',250,0,50,50)
desenhar_quadrado('black','',270,270,30,30)
desenhar_quadrado('black','',270,240,30,30)
desenhar_quadrado('black','',240,270,30,30)
desenhar_quadrado('yellow','',0,270,30,30)
desenhar_quadrado('yellow','',0,240,30,30)
desenhar_quadrado('yellow','',30,270,30,30)
desenhar_quadrado('aqua','',0,150,30,30)
desenhar_quadrado('aqua','',0,120,30,30)
desenhar_quadrado('aqua','',270,145,30,30)
desenhar_linha('green','green',0,150,300,150)


const ex2=document.getElementById('ex2');

if (ex1.getContext){
    const etx=ex2.getContext('2d')


function desenhar_quadrado2(cor,cor2,x,y,width,height,a,b,w,h){
    etx.beginPath();
    etx.lineWidth = 2;
    etx.fillStyle = cor;
    etx.strokeStyle = cor2;
    etx.fillRect(x,y,width,height);
    etx.strokeRect(a,b,w,h);
    etx.closePath()
    }

}
if (ex1.getContext){
    const etx=ex2.getContext('2d')



function desenhar_linha2(cor,cor2,x,y,a,b){
    etx.beginPath();
    etx.lineWidth = 2;
    etx.fillStyle = cor;
    etx.strokeStyle = cor2;
    etx.moveTo(x,y);
    etx.lineTo(a,b);
    etx.fill();
    etx.stroke();
    etx.closePath();

    }
}

if (ex1.getContext){
    const etx=ex2.getContext('2d')



function desenhar_arco2(cor,cor2,x,y,t,pi1,pi2){
    etx.beginPath();
    etx.lineWidth = 2;
    etx.fillStyle = cor;
    etx.strokeStyle = cor2;
    etx.arc(x,y,t,pi1*Math.PI,pi2*Math.PI);
    etx.fill();
    etx.stroke();
    etx.closePath();

    }
}

if (ex1.getContext){
    const etx=ex2.getContext('2d')



function escrever2(cor,cor2,e,x,y){
    etx.beginPath();
    etx.lineWidth = 2;
    etx.fillStyle = cor;
    etx.strokeStyle = cor2;
    etx.font = "90tpx Arial"
    etx.textAlign = "center";
    etx.fillText(e,x,y);
    etx.strokeText(e,x,y)
    etx.closePath();

    }
}