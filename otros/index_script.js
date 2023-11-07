


// Intenta copiar un texto al portapapeles
function copiarAlPortapapeles() {
    var texto = document.getElementById("textoACopiar").value;
    navigator.clipboard.writeText(texto).then(function() {
      alert("Texto copiado al portapapeles: " + texto);
    }).catch(function(err) {
      console.error("Error al copiar al portapapeles: ", err);
    });
  }
  
  // Llama a la función con el texto que deseas copiar
  copiarAlPortapapeles("Este es el texto que se copiará al portapapeles.");

