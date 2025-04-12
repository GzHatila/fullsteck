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
    ctx.font = "20px Arial"
    ctx.textAlign = "center";
    ctx.fillText(e,x,y);
    ctx.strokeText(e,x,y)
    ctx.closePath();

    }
}


desenhar_linha('black','black',150,150,150,300)

desenhar_arco('white','green',100,150,50,1,1.5)
desenhar_arco('white','green',200,150,50,1.5,0)
desenhar_arco('white','green',150,150,30,1,0)
desenhar_arco('aqua','blue',150,135,5,0,2)
desenhar_arco('yellow','green',70,235,10,0,2)
desenhar_arco('yellow','green',220,235,10,0,2)
desenhar_arco('white','green',150,300,70,1,1.5)
desenhar_arco('white','green',150,300,50,1.5,0)
desenhar_arco('aqua','green',150,300,30,1,0)

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
desenhar_quadrado('red','',100,150,50,50)


desenhar_linha('green','green',0,150,300,150)
escrever('','black','canvas',150,70)
desenhar_linha('blue','blue',0,0,150,150)
desenhar_linha('red','red',300,0,150,150)


const ex2=document.getElementById('ex2');

if (ex2.getContext){
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

if (ex2.getContext){
    const etx=ex2.getContext('2d')

function desenhar_linha2(cor,cor2,x,y,a,b,c,d,f,g){
    etx.beginPath();
    etx.lineWidth = 2;
    etx.fillStyle = cor;
    etx.strokeStyle = cor2;
    etx.moveTo(x,y);
    etx.lineTo(a,b);
    etx.lineTo(c,d);
    etx.lineTo(f,g);
    etx.fill();
    etx.stroke();
    etx.closePath();
    
    }
}
if (ex2.getContext){
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

if (ex2.getContext){
    const etx=ex2.getContext('2d')


function escrever2(cor,cor2,e,x,y){
etx.beginPath();
etx.lineWidth = 2;
etx.fillStyle = cor;
etx.strokeStyle = cor2;
etx.font = "20px Arial"
etx.textAlign = "center";
etx.fillText(e,x,y);
etx.strokeText(e,x,y)
etx.closePath();

    }
}




desenhar_quadrado2('gray','',0,210,300,90)
desenhar_quadrado2('rgb(34, 79, 230','',0,210,41,90)
desenhar_quadrado2('rgb(34, 79, 230','',10,269,100,50)

desenhar_quadrado2('rgb(80, 20, 20)','rgb(80, 20, 20)',250,250,10,30)
desenhar_arco2('green','green',255,230,20,0,2.5)


desenhar_quadrado2('rgb(80, 20, 20)','',110,130,80,80)


desenhar_arco2('rgb(34, 79, 230','rgb(34, 79, 230',-10,210,50,1,0)
desenhar_arco2('rgb(34, 79, 230','rgb(34, 79, 230',100,310,40,1.5,2.5)

desenhar_arco2('yellow','yellow',240,50,30,0,2.5)

desenhar_quadrado2('rgb(80, 20, 20)','rgb(80, 20, 20)',66,170,10,40)
desenhar_arco2('green','green',70,150,20,0,2.5)



desenhar_linha2('orange','orange',150,70,110,130,190,130,190,130)

desenhar_quadrado2('aqua','aqua',160,150,15,15)
desenhar_quadrado2('aqua','aqua',125,150,15,15)
desenhar_quadrado2('brown','brown',142,180,15,30)
