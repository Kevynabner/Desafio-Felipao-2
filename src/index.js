let ranking = partidas(15, 5)

gi
function partidas(vitoria, derrota){
 let saldoVitorias = vitoria - derrota
 return saldoVitorias
 } 
  
switch(true){
	case ranking <=10:
    	console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível FERRO!")
        break
   
   case ranking >= 11 && ranking <= 20:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível BRONZE!")
        break
    
   case ranking >= 21 && ranking <= 50:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível PRATA!")
        break
        
   case ranking >= 51 && ranking <= 80:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível OURO!")
        break
        
   case ranking >= 81 && ranking <= 90:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível DIAMANTE!")
        break
        
   case ranking >= 91 && ranking <= 100:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível LENDÁRIO!")
        break
	        
   case ranking >= 101:
   		console.log ("O Herói tem saldo de " + ranking + " vitórias" + " e está no nível IMORTAL!")
        break
   		
   		
}
