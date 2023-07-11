const seeds = {
    A: { x: -1.33, y: 0.42 },
    B: { x: 1.32, y: 0.133 },
    C: { x: 1.245, y: -0.14 },
    D: { x: -1.06, y: -0.5 }
  };
  
  const iterations = 3000; // Número de iteraciones para guardar
  
  function generateHenonSequence(seed) {
    const sequence = [];
    let x = seed.x;
    let y = seed.y;
  
    for (let i = 0; i < iterations; i++) {
      const x1 = y + 1 - 1.4 * x * x;
      const y1 = 0.3 * x;
  
      // Aplicar el criterio para asignar 0 o 1 a los valores de X e Y
      const newX = x1 <= 0.39912 ? 0 : 1;
      const newY = y1 < 0.11977 ? 0 : 1;
  
      x = newX;
      y = newY;
  
      sequence.push([x, y]);
    }
  
    return sequence;
  }
  
  
  function generateAndDownloadFile(xValue, yValue) {
    const seedKeys = Object.keys(seeds);
    let selectedSeed;
  
    // Verificar si los valores de X e Y están dentro del rango de las semillas
    const isValidSeed = seedKeys.some((seedKey) => {
      const seed = seeds[seedKey];
      if (xValue >= seed.x && xValue <= seed.x && yValue >= seed.y && yValue <= seed.y) {
        selectedSeed = seed;
        return true;
      }
      return false;
    });
  
    if (!isValidSeed) {
      // Si los valores están fuera de rango, sugerir un valor aleatorio dentro del rango
      const randomSeedKey = seedKeys[Math.floor(Math.random() * seedKeys.length)];
      selectedSeed = seeds[randomSeedKey];
      alert(
        `Los valores ingresados están fuera de rango. Se sugiere utilizar la semilla ${randomSeedKey} (${selectedSeed.x}, ${selectedSeed.y}).`
      );
    }
  
    const sequence = generateHenonSequence(selectedSeed);
  
    let data = '';
    sequence.forEach((point) => {
      data += `${point[0]},${point[1]}\n`;
    });
  
    const filename = `henon_sequence_${selectedSeed}.txt`;
    const blob = new Blob([data], { type: 'text/plain' });
  
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const anchor = document.createElement('a');
      const url = URL.createObjectURL(blob);
  
      anchor.href = url;
      anchor.download = filename;
      anchor.click();
  
      URL.revokeObjectURL(url);
    }
  
    // Generar el gráfico
    const chart = Highcharts.chart('chart', {
      chart: {
        type: 'scatter',
        zoomType: 'xy'
      },
      title: {
        text: 'Atractor de Henon'
      },
      xAxis: {
        title: {
          text: 'X'
        }
      },
      yAxis: {
        title: {
          text: 'Y'
        }
      },
      series: [
        {
          name: 'Semillas',
          color: '#6c5ce7',
          data: Object.values(seeds).map((seed) => [seed.x, seed.y])
        },
        {
          name: 'Secuencia de Henon',
          color: '#000',
          data: sequence
        }
      ]
    });
  
    chart.redraw();
  }
  
  const generateButton = document.getElementById('generate-button');
  
  generateButton.addEventListener('click', () => {
    const xValue = parseFloat(document.getElementById('x-input').value);
    const yValue = parseFloat(document.getElementById('y-input').value);
  
    generateAndDownloadFile(xValue, yValue);
  });
  