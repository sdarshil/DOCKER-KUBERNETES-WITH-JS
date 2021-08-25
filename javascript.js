function dex(){
    var xhr= new XMLHttpRequest();
    var x =document.getElementById("in").value
    var url = "http://192.168.56.106/cgi-bin/cgi1.py?x="+x
    

    xhr.open("GET", url , true);
    xhr.send();
    xhr.onload = function(){
        var output = xhr.responseText;
        var x = document.getElementById("pre");
        x.innerHTML = output;
    }
}