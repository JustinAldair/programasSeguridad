// Definir una clase para los nodos del árbol de Huffman
class NodoHuffman {
  constructor(simbolo, frecuencia) {
    this.simbolo = simbolo;
    this.frecuencia = frecuencia;
    this.izquierda = null;
    this.derecha = null;
  }
}

// Función para calcular la frecuencia de los símbolos en el texto de entrada
function calcularFrecuencias(texto) {
  const frecuencias = {};
  for (let i = 0; i < texto.length; i++) {
    const simbolo = texto[i];
    frecuencias[simbolo] = (frecuencias[simbolo] || 0) + 1;
  }
  return frecuencias;
}

// Función para construir el árbol de Huffman
function construirArbolHuffman(frecuencias) {
  const heap = [];
  for (const simbolo in frecuencias) {
    const nodo = new NodoHuffman(simbolo, frecuencias[simbolo]);
    heap.push(nodo);
  }

  while (heap.length > 1) {
    heap.sort((a, b) => a.frecuencia - b.frecuencia);
    const nodoIzquierda = heap.shift();
    const nodoDerecha = heap.shift();
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

// Función para asignar códigos a los símbolos en el árbol de Huffman
function asignarCodigos(nodo, codigoActual, codigos) {
  if (!nodo.izquierda && !nodo.derecha) {
    codigos[nodo.simbolo] = codigoActual;
    return;
  }

  asignarCodigos(nodo.izquierda, codigoActual + '0', codigos);
  asignarCodigos(nodo.derecha, codigoActual + '1', codigos);
}

// Función para codificar el texto de entrada utilizando los códigos de Huffman
function codificarHuffman(texto) {
  const frecuencias = calcularFrecuencias(texto);
  const arbol = construirArbolHuffman(frecuencias);
  const codigos = {};
  asignarCodigos(arbol, '', codigos);

  let textoCodificado = '';
  for (let i = 0; i < texto.length; i++) {
    const simbolo = texto[i];
    textoCodificado += codigos[simbolo];
  }

  return textoCodificado;
}

// Función para decodificar el texto codificado utilizando el árbol de Huffman
function decodificarHuffman(textoCodificado, arbol) {
  let textoDecodificado = '';
  let nodoActual = arbol;

  for (let i = 0; i < textoCodificado.length; i++) {
    const bit = textoCodificado[i];
    if (bit === '0') {
      nodoActual = nodoActual.izquierda;
    } else if (bit === '1') {
      nodoActual = nodoActual.derecha;
    }

    if (!nodoActual.izquierda && !nodoActual.derecha) {
      textoDecodificado += nodoActual.simbolo;
      nodoActual = arbol;
    }
  }

  return textoDecodificado;
}

// Función para codificar el texto de entrada
function codificar() {
  const inputText = document.getElementById('input-text').value;
  const codificado = codificarHuffman(inputText);
  document.getElementById('output').textContent = `Texto codificado: ${codificado}`;

  const bits = codificado.length;
  const bytes = Math.ceil(bits / 8);
  const porcentaje = ((100-(bytes / inputText.length) * 100)).toFixed(2);

  document.getElementById('bits').textContent = `Bits: ${bits}`;
  document.getElementById('bytes').textContent = `Bytes: ${bytes}`;
  document.getElementById('porcentaje').textContent = `Porcentaje de compactación: ${porcentaje}%`;
}

// Función para decodificar el texto codificado
function decodificar() {
  const inputText = document.getElementById('input-text').value;
  const frecuencias = calcularFrecuencias(inputText);
  const arbol = construirArbolHuffman(frecuencias);
  const decodificado = decodificarHuffman(inputText, arbol);
  document.getElementById('output').textContent = `Texto decodificado: ${decodificado}`;

  const bits = inputText.length * 8;
  const bytes = Math.ceil(bits / 8);
  const porcentaje = ((bytes / inputText.length) * 100).toFixed(2);

  document.getElementById('bits').textContent = `Bits: ${bits}`;
  document.getElementById('bytes').textContent = `Bytes: ${bytes}`;
  document.getElementById('porcentaje').textContent = `Porcentaje de compactación: ${porcentaje}%`;
}

