//1-
var nome = "pedro";
imprimir(nome);

var numero = 123;
imprimir(numero);

function imprimir(valor){
    console. log("o conteudo é ${valor} e o tipo é ${typeof{valor}}");
}


//5-
console.log ("Imprima a média aritmética de 3 números")
var mediaAritmetica = 0;

var primeiroNumero = 3;
console.log ("primeiro numero " + primeiroNumero);

var segundoNumero = 6;
console.log ("segundo numero " + segundoNumero);

var terceiroNumero = 9;
console.log ("terceiro numero " + terceiroNumero);

mediaAritmetica = (primeiroNumero + segundoNumero + terceiroNumero)/3;
console.log ("A média é: " + mediaAritmetica);


//6-
alert("ativ6");

var AP1 = 7;
var AP2 = 8;
var AS = 6;
var mediafinal = 0;

mediafinal = AP1 + AP2 + AS / 3;
alert(mediafinal);


//7-
var anoAtual = 2022;
var nome = prompt("Digite o seu nome:");  
var anoNascimento = prompt('Digite o ano em que você nasceu.');
 
var idade = anoAtual - anoNascimento;
 
 
if (anoNascimento<=2004){
alert(nome + " sua idade é: " + idade + " anos, você maior de idade");
}else{
alert(nome + " sua idade é: " + idade + " anos, você menor de idade");
}



//8-
console.log ("Informe 3 números e mostre qual é o maior");
var n1 = 10;
console.log ("O primeiro número é: " + n1);

var n2 = 22;
console.log ("O segundo número é: " + n2);

var n3 = 16;
console.log ("O terceiro número é: " + n3);

if (n1>n2 && n1>n3){
    console.log ("O maio número é: " + n1)
}
else if (n2>n1 && n2>n3){
    console.log ("O maior número é: "+ n2)
}
else if (n3>n1 && n3 >n2){
    console.log ("O maior número é: " + n3)
}