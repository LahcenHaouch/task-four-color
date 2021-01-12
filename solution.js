function solution(A) {
  const visitedSquares = {}
  let numberOfCountries = 0

  const rowLength = A[0].length
  const columnLength = A.length

  A.forEach((row, rowIndex) => {
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (visitedSquares[`${rowIndex}-${columnIndex}`]) {
          continue
      } else {
          const value = row[columnIndex]
          floodFill(rowIndex, columnIndex, rowLength, columnLength, value, A, visitedSquares)
          numberOfCountries ++
      }
    }
  })

  return numberOfCountries
}

function floodFill(rowIndex, columnIndex, rowLength, columnLength, originalValue, map, visitedSquares) {
  if (rowIndex < 0 || columnIndex < 0) return
  if (rowIndex >= columnLength || columnIndex >= rowLength) return
  if (visitedSquares[`${rowIndex}-${columnIndex}`]) return
  
  const currentValue = map[rowIndex][columnIndex]

  if (currentValue !== originalValue) {
      return
  } else {
      visitedSquares[`${rowIndex}-${columnIndex}`] = [rowIndex, columnIndex]
  }

  floodFill(rowIndex, columnIndex - 1, rowLength, columnLength, originalValue, map, visitedSquares)
  floodFill(rowIndex - 1,  columnIndex, rowLength, columnLength, originalValue, map, visitedSquares)
  floodFill(rowIndex + 1, columnIndex, rowLength, columnLength, originalValue, map, visitedSquares)
  floodFill(rowIndex, columnIndex + 1, rowLength, columnLength, originalValue, map, visitedSquares)
}

console.log(solution([[5, 4, 4], [4, 3, 4], [3, 2, 4], [2, 2, 2], [3, 3, 4], [1, 4, 4], [4, 1, 1]]));
