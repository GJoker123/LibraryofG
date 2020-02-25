function loadtext(textfile, objbutton) {
    var xhttp = new XMLHttpRequest();
    //alert("request called");
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            document.getElementById("displayname").innerHTML = objbutton.value;
            document.getElementById("display").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", textfile, true);
    xhttp.send();
}
