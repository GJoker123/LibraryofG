function password() {
    var pass = prompt("Please enter one of the passwords: ")
    switch (pass) {
        case "Do you wish to see the other side?":
            alert("PASSAGE GRANTED!")
            setTimeout(function () {
                window.location.replace("switch.html");
            }, 1000)
            break;
        case "I can't see. Help me.":
            alert("PASSAGE GRANTED!")
            setTimeout(function () {
                window.location.replace("switch.html");
            }, 1000)
            break;
        case "Ready to take the plunge?":
            alert("PASSAGE GRANTED!")
            setTimeout(function () {
                window.location.replace("switch.html");
            }, 1000)
            break;
        case "Do we all deserve a choice?":
            alert("PASSAGE GRANTED!")
            setTimeout(function () {
                window.location.replace("switch.html");
            }, 1000)
            break;
        case "0123":
            alert("PASSAGE GRANTED!")
            setTimeout(function () {
                window.location.replace("switch.html");
            }, 1000)
            break;
            //default:
            //alert("INCORRECT!")
    }
}

function skippassword() {
    window.location.replace("switch.html");
}

function returnpage() {
    window.location.replace("index.html");
}
