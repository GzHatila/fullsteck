let canvas=document.getElementById('canvas');
let ctx= canvas.getContext('2d');
//retangulo 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.closePath();

//retangulo 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(350,0,50,50);
ctx.closePath();

//retangulo 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(0,350,50,50);
ctx.closePath();

//retangulo 4
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'darkgreen';
ctx.fillRect(350,350,50,50);
ctx.closePath();

// linhas
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue';
ctx.moveTo(0,0);
ctx.lineTo(400,400);
ctx.stroke();
ctx.closePath();
// linhas 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue'; 
ctx.strokeStyle = 'red';
ctx.moveTo(400,0);
ctx.lineTo(0,400);
ctx.fill();
ctx.stroke();
ctx.closePath();
// linhas 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'green';
ctx.moveTo(0,200);
ctx.lineTo(400,200);
ctx.fill();
ctx.stroke();
ctx.closePath();
//arco 1
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.arc(200,200,60,0*Math.PI,1*Math.PI);
ctx.stroke();
ctx.closePath();

//arco 2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(50,150,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//arco 3
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(350,150,20,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

//texto 
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.font = "30px Arial"
ctx.textAlign = "center";
ctx.fillText("desenvolvimento web",200,100);
ctx.strokeText("desenvolvimento web",200,100)
ctx.closePath();


//exc2

let ex2=document.getElementById('ex2');
let exc2= ex2.getContext('2d');
//retangulo 1
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='aquamarine'
exc2.fillRect(5,5,390,390);
exc2.closePath();

//retangulo 2
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='brown'
exc2.fillRect(150,150,100,100);
exc2.closePath();

//retangulo 3
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='aqua'
exc2.fillRect(210,170,30,30);
exc2.closePath();

//retangulo 4
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='aqua'
exc2.fillRect(160,170,30,30);
exc2.closePath();

//retangulo 4
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='rgb(80, 20, 20)'
exc2.fillRect(190,200,20,50);
exc2.closePath();

//retangulo 4
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='grey'
exc2.fillRect(5,295,390,100);
exc2.closePath();

//retangulo 5
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='blue'
exc2.fillRect(5,345,150,50);
exc2.closePath();

//retangulo 6
exc2.beginPath()
exc2.lineWidth = 2;
exc2.fillStyle ='blue'
exc2.fillRect(5,295,50,50);
exc2.closePath();