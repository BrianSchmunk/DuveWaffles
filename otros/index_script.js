
function copiarAlPortapapeles() {
    // Selecciona el elemento de entrada de texto
    var textoACopiar = document.getElementById("textoACopiar");

    // Selecciona el texto dentro del elemento de entrada de texto
    textoACopiar.select();
    
    // Copia el texto al portapapeles
    //document.execCommand("copy");
    navigator.clipboard.writeText(textoACopiar.value);

    // Deselecciona el texto
    window.getSelection().removeAllRanges();

    // Puedes mostrar un mensaje o realizar cualquier otra acción aquí
    alert("Alias copiado en portapapeles: " + textoACopiar.value);
}



