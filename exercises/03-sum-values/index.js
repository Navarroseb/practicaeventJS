// adding the function to the window makes it globally available
window.calculateSumListener = function (){
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	let resultado = document.querySelector("#resultNumber")
	resultado.value = parseInt(stringA) + parseInt(stringB)
};
