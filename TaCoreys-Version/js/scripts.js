console.log("Testing the connection to js");

function changeLogo() {
    console.log("Clicked the arrows!")
    var logo = document.getElementById("logo-target");
    if (logo.getAttribute("src") == "/images/logo.jpg") {
        logo.setAttribute("src", "images/logo02.jpg");
    }
    else {
        logo.setAttribute("src", "/images/logo.jpg")
    }
}

function submitForm() {
    alert("Your information was sent");
}