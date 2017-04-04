function mostrarTweet(){
    var tweet = document.getElementById("inputTweet");
    var autor = document.getElementById("autor");
    var ponerTweet = document.getElementById("nuevoTweet");
    var nTweet = document.createElement("p");
    var linea = document.createElement("hr");
    
    nTweet.innerHTML = tweet.value +" Por "+ autor.value;
    ponerTweet.appendChild(nTweet);
    ponerTweet.appendChild(linea);

    tweet.value= "";
    autor.value= "";
    }
    
function contadorLetras(){
    var tweet = document.getElementById("inputTweet").value
    
    document.getElementById("contador").innerHTML="Te quedan " + (140 - tweet.length)+" de 140 caracteres.";
    if (tweet.length >=140){
        alert("No mas caracteres");
    }
}

