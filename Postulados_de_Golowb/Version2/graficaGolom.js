function generateChart() {
    var binaryInput = document.getElementById("binaryInput").value.trim();
    var binaryData = [];

    for (var i = 0; i < binaryInput.length; i++) {
        var char = binaryInput.charAt(i);
        if (char === "0" || char === "1") {
            binaryData.push(Number(char));
        }
    }

    var fileInput = document.getElementById("fileInput");
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var fileContent = event.target.result.trim();
            var fileLines = fileContent.split("\n");
            var fileData = fileLines.map(Number);
            binaryData = binaryData.concat(fileData);
            var dp = calculateDp(binaryData);
            drawChart(binaryData, dp);
        };
        reader.readAsText(file);
    } else {
        var dp = calculateDp(binaryData);
        drawChart(binaryData, dp);
    }
}

function calculateDp(sequence) {
    var C = sequence.length;
    var NC = 0;

    for (var i = 0; i < C; i++) {
        var shiftedSequence = sequence.slice(i).concat(sequence.slice(0, i));
        if (sequence.join("") !== shiftedSequence.join("")) {
            NC++;
        }
    }

    var Dp = (C - NC) / C;
    return Dp;
}

function drawChart(data, dp) {
    var canvas = document.getElementById("chartCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = 400;
    canvas.height = 200;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#007bff";
    ctx.lineWidth = 2;

    var xScale = canvas.width / (data.length - 1);
    var yScale = canvas.height;

    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (var i = 0; i < data.length; i++) {
        var value = Math.random();
        var x = i * xScale;
        var y = (1 - value) * yScale;
        ctx.lineTo(x, y);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = "#007bff";
        ctx.fill();
    }

    ctx.closePath();

    ctx.fillStyle = "#333";
    ctx.font = "12px Arial";
    ctx.fillText("1", 5, 15);
    ctx.fillText("0.5", 5, canvas.height / 2 + 5);
    ctx.fillText("0", 5, canvas.height - 5);

    // Mostrar el valor de Dp en la gráfica
    ctx.fillStyle = "#333";
    ctx.font = "bold 16px Arial";
    ctx.fillText("Dp: " + dp.toFixed(2), 320, 15);
}


