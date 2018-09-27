


<!-- Promesas 

var promise = new Promise (function (resolve, fracaso){
	const valor = 5;
	if(valor == 5){
		resolve();
	} else{
		fracaso();
	}
})

promise.then(function(resolve){
	console.log("Exito");
},
			function(fracaso){
	console.log("Error");
});

Promesas -->

<!DOCTYPE html>
<html>
<head>
	<title></title>

<script>


console.log("-----")

function init(){

document.getElementById("botonSuma").onclick=function(){sumaNumero()};

//trycatch


function sumaNumero(){

try{
	var n1 = parseInt(document.getElementById("numero1").value);
	var n1 = parseInt(document.getElementById("numero1").value);
	
	if(isNaN(n1) || isNaN(n2)){
		throw "Por favor, introduzca dos numeros";
	}
	var resultado = n1+n2;
	document.getElementById("resultado").innerHTML = n1 + "+" + n2 + "=" + resultado;
} catch(error){
	document.getElementById("resultado").innerHTML = error;
	}

console.log("hola2");

}

}

</script>
</head>
<body>
	<input type="text" name="numero1" id="numero1">
	<input type="text" name="numero2" id="numero2">
	<button id="botonSuma">Suma</button>
	<p id="resultado"></p>
</body>
</html>
