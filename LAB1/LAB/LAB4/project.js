let aleatorio=Math.floor(Math.random()* 100)
    console.log(aleatorio)


function ex1(){
    let n1 = parseInt(document.getElementById('num1').value)
    if(n1 < aleatorio){
        result=n1
        document.getElementById('errada').innerHTML="Menor do que esperado"
        document.getElementById('menor').innerHTML=n1
    }
else if(n1 > aleatorio){
       result=n1
       document.getElementById('errada').innerHTML="Maior do que o esperado"
       document.getElementById('maior').innerHTML=n1
    }
    else {
        result=n1
         document.getElementById('errada').innerHTML="Numero Coreto!!"
    }
}