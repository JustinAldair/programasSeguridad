function obtenerIndice(letra, alfabeto) {
    return alfabeto.indexOf(letra.toUpperCase());
  }
  
  function cifrarMensaje(mensaje, alfabeto, password) {
    let mensajeCifrado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letra = mensaje[i];
      let indice = obtenerIndice(letra, alfabeto);
      if (indice !== -1) {
        let desplazamiento = obtenerIndice(password[i % password.length], alfabeto);
        let nuevoIndice = (indice + desplazamiento) % alfabeto.length;
        mensajeCifrado += alfabeto[nuevoIndice];
      } else {
        mensajeCifrado += letra;
      }
    }
    return mensajeCifrado;
  }
  
  function descifrarMensaje(mensajeCifrado, alfabeto, password) {
    let mensajeDescifrado = "";
    for (let i = 0; i < mensajeCifrado.length; i++) {
      let letra = mensajeCifrado[i];
      let indice = obtenerIndice(letra, alfabeto);
      if (indice !== -1) {
        let desplazamiento = obtenerIndice(password[i % password.length], alfabeto);
        let nuevoIndice = (indice - desplazamiento + alfabeto.length) % alfabeto.length;
        mensajeDescifrado += alfabeto[nuevoIndice];
      } else {
        mensajeDescifrado += letra;
      }
    }
    return mensajeDescifrado;
  }
  
  function realizarCifradoDescifrado() {
    let mensaje = document.getElementById("mensaje").value;
    let password = document.getElementById("password").value;
    let alfabetoAmericano = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alfabetoLatinoamericano = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  
    let mensajeCifrado;
    let mensajeDescifrado;
  
    if (document.getElementById("idioma").value === "americano") {
      mensajeCifrado = cifrarMensaje(mensaje, alfabetoAmericano, password);
      mensajeDescifrado = descifrarMensaje(mensajeCifrado, alfabetoAmericano, password);
    } else {
      mensajeCifrado = cifrarMensaje(mensaje, alfabetoLatinoamericano, password);
      mensajeDescifrado = descifrarMensaje(mensajeCifrado, alfabetoLatinoamericano, password);
    }
  
    document.getElementById("mensajeCifrado").value = mensajeCifrado;
    document.getElementById("mensajeDescifrado").value = mensajeDescifrado;
  }
  
  function cifrarTexto() {
    let mensaje = document.getElementById("mensaje").value;
    let password = document.getElementById("password").value;
    let alfabeto = document.getElementById("idioma").value === "americano" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let mensajeCifrado = cifrarMensaje(mensaje, alfabeto, password);
    document.getElementById("mensajeCifrado").value = mensajeCifrado;
  }
  
  function descifrarTexto() {
    let mensajeCifrado = document.getElementById("mensajeCifrado").value;
    let password = document.getElementById("password").value;
    let alfabeto = document.getElementById("idioma").value === "americano" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let mensajeDescifrado = descifrarMensaje(mensajeCifrado, alfabeto, password);
    document.getElementById("mensajeDescifrado").value = mensajeDescifrado;
  }
  