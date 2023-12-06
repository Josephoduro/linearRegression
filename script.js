function performLinearRegression() {
  const xInput = document.getElementById("xValues").value;
  const yInput = document.getElementById("yValues").value;

  const xValues = xInput.split(",").map(Number);
  const yValues = yInput.split(",").map(Number);

  // Check if the number of x and y values match
  if (xValues.length !== yValues.length) {
    alert("Number of X and Y values must be the same");
    return;
  }

  const result = linearRegression(xValues, yValues);
  displayResult(result);
}

function linearRegression(x, y) {
  // Implement linear regression algorithm
  // ...

  // For simplicity, let's calculate the slope and intercept using a basic approach
  const n = x.length;
  const meanX = x.reduce((acc, val) => acc + val, 0) / n;
  const meanY = y.reduce((acc, val) => acc + val, 0) / n;
  const slope =
    x.reduce((acc, xi, i) => acc + (xi - meanX) * (y[i] - meanY), 0) /
    x.reduce((acc, xi) => acc + Math.pow(xi - meanX, 2), 0);
  const intercept = meanY - slope * meanX;

  return { slope, intercept };
}

function displayResult(result) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Slope: ${result.slope.toFixed(
    2
  )}, Intercept: ${result.intercept.toFixed(2)}</p>`;
}
