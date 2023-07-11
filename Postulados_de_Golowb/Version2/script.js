let chart1 = null;
let chart2 = null;
let chart3 = null;
let chart4 = null;
let chart5 = null;
let chart6 = null;
let chart7 = null;
let chart8 = null;

function countAndPlot() {
  const inputText = document.getElementById("inputText").value;

  // Contabilizar 1s y 0s
  const ones = (inputText.match(/1/g) || []).length;
  const zeros = (inputText.match(/0/g) || []).length;

  // Calcular porcentajes
  const total = ones + zeros;
  const onesPercentage = (ones / total) * 100;
  const zerosPercentage = (zeros / total) * 100;

  // Contabilizar combinaciones de 2 bits
  const combinations2 = {
    "00": 0,
    "01": 0,
    "10": 0,
    "11": 0
  };

  for (let i = 0; i < inputText.length - 1; i++) {
    const bit1 = inputText[i];
    const bit2 = inputText[i + 1];
    const combination = bit1 + bit2;
    combinations2[combination]++;
  }

  // Calcular porcentajes individuales para combinaciones de 2 bits
  const combinations2Percentages = {};
  for (const key in combinations2) {
    const count = combinations2[key];
    combinations2Percentages[key] = (count / (inputText.length - 1)) * 100;
  }

  // Contabilizar combinaciones de 3 bits
  const combinations3 = {
    "000": 0,
    "001": 0,
    "010": 0,
    "011": 0,
    "100": 0,
    "101": 0,
    "110": 0,
    "111": 0
  };

  for (let i = 0; i < inputText.length - 2; i++) {
    const bit1 = inputText[i];
    const bit2 = inputText[i + 1];
    const bit3 = inputText[i + 2];
    const combination = bit1 + bit2 + bit3;
    combinations3[combination]++;
  }

  // Calcular porcentajes individuales para combinaciones de 3 bits
  const combinations3Percentages = {};
  for (const key in combinations3) {
    const count = combinations3[key];
    combinations3Percentages[key] = (count / (inputText.length - 2)) * 100;
  }

  // Contabilizar combinaciones de 4 bits
  const combinations4 = {
    "0000": 0,
    "0001": 0,
    "0010": 0,
    "0011": 0,
    "0100": 0,
    "0101": 0,
    "0110": 0,
    "0111": 0,
    "1000": 0,
    "1001": 0,
    "1010": 0,
    "1011": 0,
    "1100": 0,
    "1101": 0,
    "1110": 0,
    "1111": 0
  };

  for (let i = 0; i < inputText.length - 3; i++) {
    const bit1 = inputText[i];
    const bit2 = inputText[i + 1];
    const bit3 = inputText[i + 2];
    const bit4 = inputText[i + 3];
    const combination = bit1 + bit2 + bit3 + bit4;
    combinations4[combination]++;
  }

  // Calcular porcentajes individuales para combinaciones de 4 bits
  const combinations4Percentages = {};
  for (const key in combinations4) {
    const count = combinations4[key];
    combinations4Percentages[key] = (count / (inputText.length - 3)) * 100;
  }

  // Contabilizar combinaciones de 5 bits
const combinations5 = {
  "00000": 0,
  "00001": 0,
  "00010": 0,
  "00011": 0,
  "00100": 0,
  "00101": 0,
  "00110": 0,
  "00111": 0,
  "01000": 0,
  "01001": 0,
  "01010": 0,
  "01011": 0,
  "01100": 0,
  "01101": 0,
  "01110": 0,
  "01111": 0,
  "10000": 0,
  "10001": 0,
  "10010": 0,
  "10011": 0,
  "10100": 0,
  "10101": 0,
  "10110": 0,
  "10111": 0,
  "11000": 0,
  "11001": 0,
  "11010": 0,
  "11011": 0,
  "11100": 0,
  "11101": 0,
  "11110": 0,
  "11111": 0
};

for (let i = 0; i < inputText.length - 4; i++) {
  const combination = inputText.slice(i, i + 5);
  combinations5[combination]++;
}

// Calcular porcentajes individuales para combinaciones de 5 bits
const combinations5Percentages = {};
for (const key in combinations5) {
  const count = combinations5[key];
  combinations5Percentages[key] = (count / (inputText.length - 4)) * 100;
}




// Contabilizar combinaciones de 6 bits
const combinations6 = {
  "000000": 0,
  "000001": 0,
  "000010": 0,
  "000011": 0,
  "000100": 0,
  "000101": 0,
  "000110": 0,
  "000111": 0,
  "001000": 0,
  "001001": 0,
  "001010": 0,
  "001011": 0,
  "001100": 0,
  "001101": 0,
  "001110": 0,
  "001111": 0,
  "010000": 0,
  "010001": 0,
  "010010": 0,
  "010011": 0,
  "010100": 0,
  "010101": 0,
  "010110": 0,
  "010111": 0,
  "011000": 0,
  "011001": 0,
  "011010": 0,
  "011011": 0,
  "011100": 0,
  "011101": 0,
  "011110": 0,
  "011111": 0,
  "100000": 0,
  "100001": 0,
  "100010": 0,
  "100011": 0,
  "100100": 0,
  "100101": 0,
  "100110": 0,
  "100111": 0,
  "101000": 0,
  "101001": 0,
  "101010": 0,
  "101011": 0,
  "101100": 0,
  "101101": 0,
  "101110": 0,
  "101111": 0,
  "110000": 0,
  "110001": 0,
  "110010": 0,
  "110011": 0,
  "110100": 0,
  "110101": 0,
  "110110": 0,
  "110111": 0,
  "111000": 0,
  "111001": 0,
  "111010": 0,
  "111011": 0,
  "111100": 0,
  "111101": 0,
  "111110": 0,
  "111111": 0
};

for (let i = 0; i < inputText.length - 5; i++) {
  const combination = inputText.slice(i, i + 6);
  combinations6[combination]++;
}

// Calcular porcentajes individuales para combinaciones de 6 bits
const combinations6Percentages = {};
for (const key in combinations6) {
  const count = combinations6[key];
  combinations6Percentages[key] = (count / (inputText.length - 5)) * 100;
}

const combinations7 = {};
for (let i = 0; i < inputText.length - 6; i++) {
  const combination = inputText.slice(i, i + 7);
  if (!combinations7.hasOwnProperty(combination)) {
    combinations7[combination] = 0;
  }
  combinations7[combination]++;
}

// Calcular porcentajes individuales para combinaciones de 7 bits
const combinations7Percentages = {};
for (const key in combinations7) {
  const count = combinations7[key];
  combinations7Percentages[key] = (count / (inputText.length - 6)) * 100;
}

// Contabilizar combinaciones de 8 bits
const combinations8 = {};
for (let i = 0; i < inputText.length - 7; i++) {
  const combination = inputText.slice(i, i + 8);
  if (!combinations8.hasOwnProperty(combination)) {
    combinations8[combination] = 0;
  }
  combinations8[combination]++;
}

// Calcular porcentajes individuales para combinaciones de 8 bits
const combinations8Percentages = {};
for (const key in combinations8) {
  const count = combinations8[key];
  combinations8Percentages[key] = (count / (inputText.length - 7)) * 100;
}

  // Destruir gráficas existentes si ya se han creado
  if (chart1) {
    chart1.destroy();
  }
  if (chart2) {
    chart2.destroy();
  }
  if (chart3) {
    chart3.destroy();
  }
  if (chart4) {
    chart4.destroy();
  }
  if (chart5) {
    chart5.destroy();
  }
  if (chart6) {
    chart1.destroy();
  }
  if (chart7) {
    chart2.destroy();
  }
  if (chart8) {
    chart3.destroy();
  }
  

  // Crear nuevas instancias de gráficas
  const chart1Context = document.getElementById("chart1").getContext("2d");
  chart1 = new Chart(chart1Context, {
    type: "bar",
    data: {
      labels: ["0", "1"],
      datasets: [
        {
          data: [zeros, ones],
          backgroundColor: [getRandomColor(), getRandomColor()],
        },
      ],
    },
    options: {
      indexAxis: "x",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const chart2Context = document.getElementById("chart2").getContext("2d");
  chart2 = new Chart(chart2Context, {
    type: "bar",
    data: {
      labels: ["00", "01", "10", "11"],
      datasets: [
        {
          data: [
            combinations2["00"],
            combinations2["01"],
            combinations2["10"],
            combinations2["11"],
          ],
          backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
        },
      ],
    },
    options: {
      indexAxis: "x",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  const chart3Context = document.getElementById("chart3").getContext("2d");
  chart3 = new Chart(chart3Context, {
    type: "bar",
    data: {
      labels: ["000", "001", "010", "011", "100", "101", "110", "111"],
      datasets: [
        {
          data: [
            combinations3["000"],
            combinations3["001"],
            combinations3["010"],
            combinations3["011"],
            combinations3["100"],
            combinations3["101"],
            combinations3["110"],
            combinations3["111"],
          ],
          backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()],
        },
      ],
    },
    options: {
      indexAxis: "x",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  //grafica para 4 bits:
  const chart4Context = document.getElementById("chart4").getContext("2d");
  chart4 = new Chart(chart4Context, {
    type: "bar",
    data: {
      labels: [
        "0000", "0001", "0010", "0011",
        "0100", "0101", "0110", "0111",
        "1000", "1001", "1010", "1011",
        "1100", "1101", "1110", "1111"
      ],
      datasets: [
        {
          data: [
            combinations4["0000"], combinations4["0001"], combinations4["0010"], combinations4["0011"],
            combinations4["0100"], combinations4["0101"], combinations4["0110"], combinations4["0111"],
            combinations4["1000"], combinations4["1001"], combinations4["1010"], combinations4["1011"],
            combinations4["1100"], combinations4["1101"], combinations4["1110"], combinations4["1111"]
          ],
          backgroundColor: [
            getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
            getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
            getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor(),
            getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()
          ],
        },
      ],
    },
    options: {
      indexAxis: "x",
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });


  const chart5Context = document.getElementById("chart5").getContext("2d");
chart5 = new Chart(chart5Context, {
  type: "bar",
  data: {
    labels: [
      "00000", "00001", "00010", "00011", "00100", "00101", "00110", "00111",
      "01000", "01001", "01010", "01011", "01100", "01101", "01110", "01111",
      "10000", "10001", "10010", "10011", "10100", "10101", "10110", "10111",
      "11000", "11001", "11010", "11011", "11100", "11101", "11110", "11111"
    ],
    datasets: [{
      data: Object.values(combinations5),
      backgroundColor: Array.from({ length: 32 }, getRandomColor),
    }],
  },
  options: {
    indexAxis: "x",
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


const chart6Context = document.getElementById("chart6").getContext("2d");
chart6 = new Chart(chart6Context, {
  type: "bar",
  data: {
    labels: [
      "000000", "000001", "000010", "000011", "000100", "000101", "000110", "000111",
      "001000", "001001", "001010", "001011", "001100", "001101", "001110", "001111",
      "010000", "010001", "010010", "010011", "010100", "010101", "010110", "010111",
      "011000", "011001", "011010", "011011", "011100", "011101", "011110", "011111",
      "100000", "100001", "100010", "100011", "100100", "100101", "100110", "100111",
      "101000", "101001", "101010", "101011", "101100", "101101", "101110", "101111",
      "110000", "110001", "110010", "110011", "110100", "110101", "110110", "110111",
      "111000", "111001", "111010", "111011", "111100", "111101", "111110", "111111"
    ],
    datasets: [{
      data: Object.values(combinations6),
      backgroundColor: Array.from({ length: 64 }, getRandomColor),
    }],
  },
  options: {
    indexAxis: "x",
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


const chart7Context = document.getElementById("chart7").getContext("2d");
chart7 = new Chart(chart7Context, {
  type: "bar",
  data: {
    labels: Object.keys(combinations7),
    datasets: [{
      data: Object.values(combinations7),
      backgroundColor: Array.from({ length: 128 }, getRandomColor),
    }],
  },
  options: {
    indexAxis: "x",
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


const chart8Context = document.getElementById("chart8").getContext("2d");
chart8 = new Chart(chart8Context, {
  type: "bar",
  data: {
    labels: Object.keys(combinations8),
    datasets: [{
      data: Object.values(combinations8),
      backgroundColor: Array.from({ length: 256 }, getRandomColor),
    }],
  },
  options: {
    indexAxis: "x",
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});


  const legendContainer1 = document.getElementById("legendContainer1");
  legendContainer1.innerHTML = "";

  const zeroLegendItem = document.createElement("div");
  zeroLegendItem.classList.add("legendItem");
  zeroLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart1.data.datasets[0].backgroundColor[0]};"></div>
                            <div class="legendLabel">Color 0:</div>
                            <div class="percentage">${zerosPercentage.toFixed(2)}%</div>`;
  legendContainer1.appendChild(zeroLegendItem);

  const oneLegendItem = document.createElement("div");
  oneLegendItem.classList.add("legendItem");
  oneLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart1.data.datasets[0].backgroundColor[1]};"></div>
                           <div class="legendLabel">Color 1:</div>
                           <div class="percentage">${onesPercentage.toFixed(2)}%</div>`;
  legendContainer1.appendChild(oneLegendItem);

  const chart2LegendContainer = document.getElementById("legendContainer2");
  chart2LegendContainer.innerHTML = "";

  for (const key in combinations2Percentages) {
    const combinationPercentage = combinations2Percentages[key];
    const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

    const combinationLegendItem = document.createElement("div");
    combinationLegendItem.classList.add("legendItem");
    combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart2.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
    chart2LegendContainer.appendChild(combinationLegendItem);
  }

  const chart3LegendContainer = document.getElementById("legendContainer3");
  chart3LegendContainer.innerHTML = "";

  for (const key in combinations3Percentages) {
    const combinationPercentage = combinations3Percentages[key];
    const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

    const combinationLegendItem = document.createElement("div");
    combinationLegendItem.classList.add("legendItem");
    combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart3.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
    chart3LegendContainer.appendChild(combinationLegendItem);
  }

  const chart4LegendContainer = document.getElementById("legendContainer4");
  chart4LegendContainer.innerHTML = "";

  for (const key in combinations4Percentages) {
    const combinationPercentage = combinations4Percentages[key];
    const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

    const combinationLegendItem = document.createElement("div");
    combinationLegendItem.classList.add("legendItem");
    combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart4.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                    <div class="legendLabel">${key}:</div>
                                    <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
    chart4LegendContainer.appendChild(combinationLegendItem);
  }

//////Enviar al html
  const chart5LegendContainer = document.getElementById("legendContainer5");
chart5LegendContainer.innerHTML = "";

for (const key in combinations5Percentages) {
  const combinationPercentage = combinations5Percentages[key];
  const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

  const combinationLegendItem = document.createElement("div");
  combinationLegendItem.classList.add("legendItem");
  combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart5.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
  chart5LegendContainer.appendChild(combinationLegendItem);
}

const chart6LegendContainer = document.getElementById("legendContainer6");
chart6LegendContainer.innerHTML = "";

for (const key in combinations6Percentages) {
  const combinationPercentage = combinations6Percentages[key];
  const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

  const combinationLegendItem = document.createElement("div");
  combinationLegendItem.classList.add("legendItem");
  combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart6.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
  chart6LegendContainer.appendChild(combinationLegendItem);
}




const chart7LegendContainer = document.getElementById("legendContainer7");
chart7LegendContainer.innerHTML = "";

for (const key in combinations7Percentages) {
  const combinationPercentage = combinations7Percentages[key];
  const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

  const combinationLegendItem = document.createElement("div");
  combinationLegendItem.classList.add("legendItem");
  combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart7.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
  chart7LegendContainer.appendChild(combinationLegendItem);
}

const chart8LegendContainer = document.getElementById("legendContainer8");
chart8LegendContainer.innerHTML = "";

for (const key in combinations8Percentages) {
  const combinationPercentage = combinations8Percentages[key];
  const colorIndex = parseInt(key, 2); // Convertir la clave a un índice numérico

  const combinationLegendItem = document.createElement("div");
  combinationLegendItem.classList.add("legendItem");
  combinationLegendItem.innerHTML = `<div class="legendColor" style="background-color: ${chart8.data.datasets[0].backgroundColor[colorIndex]};"></div>
                                      <div class="legendLabel">${key}:</div>
                                      <div class="percentage">${combinationPercentage.toFixed(2)}%</div>`;
  chart8LegendContainer.appendChild(combinationLegendItem);
}


}

document.addEventListener("DOMContentLoaded", () => {
  const countButton = document.getElementById("countButton");
  if (countButton) {
    countButton.addEventListener("click", countAndPlot);
  }

  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", handleFileUpload);
  }
});

function handleFileUpload(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const fileContent = e.target.result;
    document.getElementById("inputText").value = fileContent;
  };

  reader.readAsText(file);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}