
var cookieTime = document.querySelector('.cookieDiv')

function hideBox() {
    console.log("You clicked Accept")
    cookieTime.remove()
}
function alertText() {
    console.log("City clicked")
    alert("Loading Weather Report...")
}

function celsius(temp) {
    return Math.round(9 / 5 * temp + 32);
}
 
function fahrenheit(temp) {
    return Math.round(5 / 9 * (temp - 32));
}
 
function changeTemp(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "℃") {
            tempSpan.innerText = celsius(tempVal);
        } else {
            tempSpan.innerText = fahrenheit(tempVal);
        }
    }
}
