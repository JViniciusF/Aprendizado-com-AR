window.onload =function(){
    var marcadorTeste = document.getElementById("ba");
    console.log("Fudeu geral");
    marcadorTeste.addEventListener("markerFound",function(){
        alert("Achou");
    });
    
}

