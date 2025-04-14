function animacao() {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height); 
    ctx.drawImage(imagem, quadrado.x, quadrado.y, quadrado.width, quadrado.height);
    requestAnimationFrame(animacao);
  }
  
  let canvas1 = document.getElementById('canvas1');
  let ctx = canvas1.getContext('2d');
  
  
  let quadrado = {
    x: 150, 
    y: 150, 
    width: 50, 
    height: 50, 
  };
  
  
  let imagem = new Image();
  imagem.src = 'maca.webp'; 
  
  imagem.onload = function () {
    
    animacao();
  };
  

  document.addEventListener('mousemove', function (evento) {
    let rect = canvas1.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
  
    
    quadrado.x = x_mouse - quadrado.width / 2;
    quadrado.y = y_mouse - quadrado.height / 2;
  
   
    if (quadrado.x < 0) {
      quadrado.x = 0;
    }
    
    if (quadrado.x + quadrado.width > canvas1.width) {
      quadrado.x = canvas1.width - quadrado.width;
    }
   
    if (quadrado.y < 0) {
      quadrado.y = 0;
    }
    
    if (quadrado.y + quadrado.height > canvas1.height) {
      quadrado.y = canvas1.height - quadrado.height;
    }
  });
  
  ///oi