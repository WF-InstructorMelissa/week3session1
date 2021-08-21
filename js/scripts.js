console.log("Running the scripts.js file")

let logoImage = document.querySelector("#siteLogo")

function leftImageClicked() {
	console.log("left arrow clicked to change logo")
	logoImage.src = "images/logo.jpg"
}

function rightImageClicked() {
	console.log("right arrow clicked to change logo")
	logoImage.src = "images/logo02.jpg"
}

function hideProductsHeading() {
	console.log("hiding products heading")
	// adding a class to the HTML element without replacing what it already has
	//		this is a safe way of NOT overwriting needed CSS
	document.getElementById("productHeading").classList.add("hideElement")
}

function unhideProductsHeading() {
	console.log("unhiding products heading")
	// adding a class to the HTML element without replacing what it already has
	//		this is a safe way of NOT overwriting needed CSS
	document.getElementById("productHeading").classList.remove("hideElement")
}

function alertUser() {
	console.log("alerting user!")
	alert("Your information was sent")
}
