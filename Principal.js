console.log("Bem-vindo ao classificador de Héroi!!!!");
console.log("Bem-vindo ao classificador de Héroi!!!!");
let heroi = prompt("Digite seu nome de héroi");
let pontos = prompt("Digite seu nível");
let score = parseInt(pontos);


console.log("Aguarde um momento estamos medindo sua energia!!!")

if (score <= 1000){ console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Ferro");}
else if (score >= 1001 && score <= 2000) { console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Bronze");}
else if (score >= 2001 && score <= 5000) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Prata");}
else if (score >= 5001 && score <= 7000) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Outro");}
else if (score >= 7001 && score <= 8000) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Platina");}
else if (score >= 8001 && score <= 9000) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Ascendete");}
else if (score >= 9001 && score <= 10000) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Imortal");}
else if (score >= 10001) {console.log("!!!!!" + heroi + ", você atingiu " + score + "se tornou nosso herói nivel Radiante");}
else {console.log("!!!!!" + heroi + "continue tendando!!!");}
