var currentUser = "Josh";

window.onload = function loadfn() {
	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}

window.turnChanger = function turnChanger() {
	if (currentUser == "Josh") {
		currentUser = "Juan";
				
	} 
	
	else if (currentUser == "Juan") {
		currentUser = "Mario";
				
	} 
	
	else {
		currentUser = "Josh";
	}
	
		
	 

	document.getElementById("screen").innerHTML = "It's " + currentUser + "'s turn";
}
