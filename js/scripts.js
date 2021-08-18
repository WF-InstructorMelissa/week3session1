console.log('Testing linkage')

function hideText(element) {
    console.log("you clicked Products")
    element.classList.add('hide')
}

function alertBox() {
    console.log('You submitted a form')
    alert("Your information was sent")
}

var logoImg = document.querySelector("#logo");
    
function switchImg01() {
    console.log('right arrow clicked')
    logoImg.src = "./images/logo02.jpg";  
}
 
function switchImg02() {
    console.log('left arrow clicked')
    logoImg.src = "./images/logo.jpg";
}
