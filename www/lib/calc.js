// This is a JavaScript file

function Resultado() {
	var peso;
	var alt;
	var result;

	peso = parseFloat(document.getElementById('peso').value);

	alt = parseFloat(document.getElementById('alt').value);

	result = peso / (alt * alt);

	if(result < 18.5)
	{ 
		document.getElementById('img').src = "lib/Figura3.png";
	}else if (result >= 18.5 && result <= 24.9)
	{
		document.getElementById('img').src = "lib/Figura4.png";
	} else
	{
		document.getElementById('img').src = "lib/Figura5.png";
	}
}	