function calculateGraphs() {
  var user1Data = document.getElementById('user1-data').value;
  var user1Code = document.getElementById('user1-code').value;

  var user2Data = document.getElementById('user2-data').value;
  var user2Code = document.getElementById('user2-code').value;

  var user3Data = document.getElementById('user3-data').value;
  var user3Code = document.getElementById('user3-code').value;

  var user1 = processUserInput(user1Data, user1Code);
  var user2 = processUserInput(user2Data, user2Code);
  var user3 = processUserInput(user3Data, user3Code);

  if (user1 && user2 && user3) {
    generateGraph('user1', user1.spreadMessage);
    generateGraph('user2', user2.spreadMessage);
    generateGraph('user3', user3.spreadMessage);
    updateSumGraph(user1.spreadMessage, user2.spreadMessage, user3.spreadMessage);
    displaySpreadMessage(user1, user2, user3);
    displayXORTable(user1.spreadingCode, user1.data, user2.spreadingCode, user2.data, user3.spreadingCode, user3.data);
  }
}

function processUserInput(data, code) {
  var binaryRegex = /^[01]+$/;

  if (!binaryRegex.test(data) || !binaryRegex.test(code)) {
    alert('Ingrese datos binarios válidos (0s y 1s).');
    return null;
  }

  var dataArr = data.split('').map(Number);
  var codeArr = code.split('').map(Number);

  var codeLength = dataArr.length * codeArr.length;

  // Generar la secuencia de código esparcido correctamente
  var spreadMessage = [];
  for (var i = 0; i < dataArr.length; i++) {
    for (var j = 0; j < codeArr.length; j++) {
      spreadMessage.push((codeArr[j] ^ dataArr[i]) === 0 ? -1 : 1);
    }
  }

  var spreadingCode = codeArr.join(' ');

  return {
    spreadMessage: spreadMessage,
    spreadingCode: spreadingCode,
    data: dataArr.join(' ')
  };
}

function generateGraph(userId, spreadMessage) {
  var ctx = document.getElementById(userId + '-graph').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: generateLabels(spreadMessage.length),
      datasets: [
        {
          label: 'Spread Message',
          data: spreadMessage.map(function (value) {
            return value === -1 ? 1 : -1;
          }),
          borderColor: 'blue',
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2,
            callback: function (value) {
              return value === 1 ? '-1' : '+1';
            },
          },
        },
      },
    },
  });
}

function updateSumGraph(user1Spread, user2Spread, user3Spread) {
  var sumSpread = [];

  for (var i = 0; i < user1Spread.length; i++) {
    var sum = user1Spread[i] + user2Spread[i] + user3Spread[i];
    sumSpread.push(-sum);
  }

  var ctx = document.getElementById('sum-graph').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: generateLabels(sumSpread.length),
      datasets: [
        {
          label: 'Sum Spread',
          data: sumSpread,
          borderColor: 'green',
          borderWidth: 1,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 2,
            callback: function (value) {
              return value === -1 ? '+1' : '-1';
            },
          },
        },
      },
    },
  });
}


function generateLabels(length) {
  var labels = [];

  for (var i = 1; i <= length; i++) {
    labels.push(i.toString());
  }

  return labels;
}

function displaySpreadMessage(user1, user2, user3) {
  var spreadMessageContainer = document.getElementById('spread-message-container');
  spreadMessageContainer.innerHTML =
    '<strong>Spread Message:</strong><br>' +
    'User 1 Data: ' + user1.data + '<br>' +
    'User 1 Code: ' + user1.spreadingCode + '<br>' +
    'User 1 Spread Message: ' + convertToBinary(user1.spreadMessage).join(' ') + '<br><br>' +
    'User 2 Data: ' + user2.data + '<br>' +
    'User 2 Code: ' + user2.spreadingCode + '<br>' +
    'User 2 Spread Message: ' + convertToBinary(user2.spreadMessage).join(' ') + '<br><br>' +
    'User 3 Data: ' + user3.data + '<br>' +
    'User 3 Code: ' + user3.spreadingCode + '<br>' +
    'User 3 Spread Message: ' + convertToBinary(user3.spreadMessage).join(' ');
}

function convertToBinary(array) {
  return array.map(function (bit) {
    return bit === -1 ? '0' : '1';
  });
}

function displayXORTable(code1, data1, code2, data2, code3, data3) {
  var xorTableContainer = document.getElementById('xor-table-container');

  var code1XORData1 = calculateXOR(code1, data1);
  var code2XORData2 = calculateXOR(code2, data2);
  var code3XORData3 = calculateXOR(code3, data3);

  var tableHTML =
    '<strong>XOR Table:</strong><br>' +
    '<table>' +
    '<tr><th>Code</th><th>Data</th><th>XOR Result</th></tr>' +
    '<tr><td>' + code1 + '</td><td>' + data1 + '</td><td>' + code1XORData1 + '</td></tr>' +
    '<tr><td>' + code2 + '</td><td>' + data2 + '</td><td>' + code2XORData2 + '</td></tr>' +
    '<tr><td>' + code3 + '</td><td>' + data3 + '</td><td>' + code3XORData3 + '</td></tr>' +
    '</table>';

  xorTableContainer.innerHTML = tableHTML;
}

function calculateXOR(code, data) {
  var codeArr = code.split(' ').map(Number);
  var dataArr = data.split(' ').map(Number);

  var result = [];
  for (var i = 0; i < codeArr.length; i++) {
    result.push(codeArr[i] ^ dataArr[i]);
  }

  return result.join(' ');
}
