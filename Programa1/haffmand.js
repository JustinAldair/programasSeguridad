class NodoHuffman {
  constructor(simbolo, frecuencia) {
    this.simbolo = simbolo;
    this.frecuencia = frecuencia;
    this.izquierda = null;
    this.derecha = null;
  }
}

function calcularFrecuencias(texto) {
  const frecuencias = {};
  for (let i = 0; i < texto.length; i++) {
    const simbolo = texto[i];
    frecuencias[simbolo] = (frecuencias[simbolo] || 0) + 1;
  }
  return frecuencias;
}

function construirArbolHuffman(frecuencias) {
  const heap = [];
  for (const simbolo in frecuencias) {
    const nodo = new NodoHuffman(simbolo, frecuencias[simbolo]);
    heap.push(nodo);
  }

  while (heap.length > 1) {
    heap.sort((a, b) => b.frecuencia - a.frecuencia); // se usa orden descendente
    const nodoIzquierda = heap.pop();
    const nodoDerecha = heap.pop(); 
    const nuevoNodo = new NodoHuffman(
      nodoIzquierda.simbolo + nodoDerecha.simbolo,
      nodoIzquierda.frecuencia + nodoDerecha.frecuencia
    );
    nuevoNodo.izquierda = nodoIzquierda;
    nuevoNodo.derecha = nodoDerecha;
    heap.push(nuevoNodo);
  }

  return heap[0];
}

function asignarCodigos(nodo, codigoActual, codigos, probabilidades) {
  if (!nodo) {
    return;
  }

  if (!nodo.izquierda && !nodo.derecha) {
    codigos[nodo.simbolo] = codigoActual;
    return;
  }

  asignarCodigos(nodo.izquierda, codigoActual + '0', codigos, probabilidades);
  asignarCodigos(nodo.derecha, codigoActual + '1', codigos, probabilidades);
}

function codificarHuffman(texto) {
  const frecuencias = calcularFrecuencias(texto);
  const arbol = construirArbolHuffman(frecuencias);
  const codigos = {};
  const probabilidades = {};
  asignarCodigos(arbol, '', codigos, probabilidades);

  let tabla = '<table>';
  tabla += '<tr><th>Carácter</th><th>Palabra Código</th><th>Probabilidad</th></tr>';

  const simbolosOrdenados = Array.from(new Set(texto)).filter(simbolo => frecuencias[simbolo]); // Obtener símbolos únicos en el orden de aparición

  for (const simbolo of simbolosOrdenados) {
    const frecuencia = frecuencias[simbolo];
    const probabilidad = `${frecuencia}/${texto.length}`;
    tabla += `<tr><td>${simbolo}</td><td>${codigos[simbolo]}</td><td>${probabilidad}</td></tr>`;
  }

  tabla += '</table>';

  let codificado = '';
  for (let i = 0; i < texto.length; i++) {
    const simbolo = texto[i];
    codificado += codigos[simbolo] + ' ';
  }

  return { tabla, codificado };
}

function codificar() {
  const inputText = document.getElementById('input-text').value;
  const { tabla, codificado } = codificarHuffman(inputText);

  document.getElementById('output').innerHTML = `Texto codificado: ${codificado}<br><br>${tabla}`;

  const bits = codificado.replace(/ /g, '').length;
  const bytes = Math.ceil(bits / 8);
  const porcentaje = ((1 - (bytes * 8) / (inputText.length * 8)) * 100).toFixed(2);

  document.getElementById('bits').textContent = `Bits: ${bits}`;
  document.getElementById('bytes').textContent = `Bytes: ${bytes}`;
  document.getElementById('porcentaje').textContent = `Porcentaje de compactación: ${porcentaje}%`;
}

// Cargar archivo txt
function cargarArchivo(event) {
  const archivo = event.target.files[0];
  const lector = new FileReader();
  
  lector.onload = function(e) {
    const contenido = e.target.result;
    document.getElementById('input-text').value = contenido;
  };
  
  lector.readAsText(archivo);
}
