const x = document.getElementById("result");
window.onload = function(){
if (typeof(Storage) !== "undefined") {
  x.innerHTML = "Your browser supports Web storage!";
  // Cargar los valores cargados
  var localName = this.localStorage.getItem('nameLocal');
  if (localName){
    this.document.getElementById("localSpan").innerText = "Nombre guardado es: " + localName;
    var sessionName = this.sessionStorage.getItem('nameSession');
    if (sessionName){
        document.getElementById("sessionSpan").innerText = "Nombre guardado es: " + sessionName;

    }
  }
} else {
  x.innerHTML = "Sorry, no Web storage support!";
}
}
function saveToLocalStorage() {
    var name = document.getElementById("nameLocal").value;
    localStorage.setItem('nameLocal', name);
    document.getElementById("localSpan").innerText = "Nombre guardado es: " + name;
    alert(name);
}

function saveToSessionStorage() {
    var name = document.getElementById("nameSession").value;
    sessionStorage.setItem('nameSession', name);
    document.getElementById("sessionSpan").innerText = "Nombre guardado es: " +name;
    alert(name);
}