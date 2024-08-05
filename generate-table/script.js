const $body = document.querySelector("body");
const $rowsInput = document.querySelector("#rows");
const $columnsInput = document.querySelector("#columns");

const generateTable = () => {
  // Delete previously created table
  const $previousTable = document.querySelector("table");
  if ($previousTable !== null) {
    $previousTable.remove();
  }

  const $table = document.createElement("table");
  const rowCount = parseInt($rowsInput.value);
  const columnCount = parseInt($columnsInput.value);

  // Create a 2D array to store numbers
  let valueArr = Array(rowCount)
    .fill()
    .map(() => Array(columnCount).fill(0));

  // Fill the array with correct sequence of numbers
  let counter = 1;

  for (let j = 0; j < columnCount; j++) {
    if (j % 2 === 0) {
      // Even columns: top to bottom
      for (let i = 0; i < rowCount; i++) {
        valueArr[i][j] = counter++;
      }
    } else {
      // Odd columns: bottom to top
      for (let i = rowCount - 1; i >= 0; i--) {
        valueArr[i][j] = counter++;
      }
    }
  }

  // Generate table with the final array
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columnCount; j++) {
      const cell = document.createElement("td");
      cell.textContent = valueArr[i][j];
      row.appendChild(cell);
    }
    $table.appendChild(row);
  }

  $body.appendChild($table);
};
