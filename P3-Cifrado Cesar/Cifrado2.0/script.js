function cifrar() {
    var mensaje = document.getElementById('mensaje').value.toUpperCase();
    var contrasena = document.getElementById('contrasena').value.toUpperCase();
    var abecedario = obtenerAbecedario();
    var resultadoCifrado = '';

    for (var i = 0; i < mensaje.length; i++) {
        var char = mensaje.charAt(i);
        var index = abecedario.indexOf(char);

        if (index !== -1) {
            var contrasenaIndex = i % contrasena.length;
            var contrasenaChar = contrasena.charAt(contrasenaIndex);
            var contrasenaIndexEnAbecedario = abecedario.indexOf(contrasenaChar);
            var cifradoIndex = (index + contrasenaIndexEnAbecedario) % abecedario.length;
            var cifradoChar = abecedario.charAt(cifradoIndex);
            resultadoCifrado += cifradoChar;
        } else {
            resultadoCifrado += char;
        }
    }

    document.getElementById('resultadoCifrado').value = resultadoCifrado;
}

function descifrar() {
    var mensajeCifrado = document.getElementById('resultadoCifrado').value.toUpperCase();
    var contrasena = document.getElementById('contrasena').value.toUpperCase();
    var abecedario = obtenerAbecedario();
    var resultadoDescifrado = '';

    for (var i = 0; i < mensajeCifrado.length; i++) {
        var char = mensajeCifrado.charAt(i);
        var index = abecedario.indexOf(char);

        if (index !== -1) {
            var contrasenaIndex = i % contrasena.length;
            var contrasenaChar = contrasena.charAt(contrasenaIndex);
            var contrasenaIndexEnAbecedario = abecedario.indexOf(contrasenaChar);
            var descifradoIndex = (index - contrasenaIndexEnAbecedario + abecedario.length) % abecedario.length;
            var descifradoChar = abecedario.charAt(descifradoIndex);
            resultadoDescifrado += descifradoChar;
        } else {
            resultadoDescifrado += char;
        }
    }

    document.getElementById('resultadoDescifrado').value = resultadoDescifrado;
}

function obtenerAbecedario() {
    var abecedarioSeleccionado = document.getElementById('abecedario').value;

    if (abecedarioSeleccionado === 'norteamericano') {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    } else if (abecedarioSeleccionado === 'latinoamericano') {
        return 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    }
}
