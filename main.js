var calcular = document.getElementById('calcular')

function gerarCalcular(){

  var resultado = document.getElementById('resultado')
 
 var tabuada =''
  var numero = document.getElementById('numero').value
  for(var x = 1;x <=10 ;x++)
   tabuada +=  ( x + 'x' + numero +'='+ (x*numero) + '<br>' )
    resultado.innerHTML = tabuada

  
}

calcular.addEventListener('click', gerarCalcular)

