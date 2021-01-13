export function countCountries(A: number[][]) {
  const visitedSquares: { [x: string]: number[] } = {}
  let numberOfCountries = 0

  const rowLength = A[0].length
  const columnLength = A.length

  A.forEach((row, rowIndex) => {
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (visitedSquares[`${rowIndex}-${columnIndex}`]) {
        // eslint-disable-next-line no-continue
        continue
      } else {
        const value = row[columnIndex]
        floodFill(
          rowIndex,
          columnIndex,
          rowLength,
          columnLength,
          value,
          A,
          visitedSquares
        )
        numberOfCountries++
      }
    }
  })

  return numberOfCountries
}

function floodFill(
  rowIndex: number,
  columnIndex: number,
  rowLength: number,
  columnLength: number,
  originalValue: number,
  map: number[][],
  visitedSquares: { [x: string]: number[] }
) {
  if (rowIndex < 0 || columnIndex < 0) return
  if (rowIndex >= columnLength || columnIndex >= rowLength) return
  if (visitedSquares[`${rowIndex}-${columnIndex}`]) return

  const currentValue = map[rowIndex][columnIndex]

  if (currentValue !== originalValue) {
    return
  }
  visitedSquares[`${rowIndex}-${columnIndex}`] = [rowIndex, columnIndex]

  floodFill(
    rowIndex,
    columnIndex - 1,
    rowLength,
    columnLength,
    originalValue,
    map,
    visitedSquares
  )
  floodFill(
    rowIndex - 1,
    columnIndex,
    rowLength,
    columnLength,
    originalValue,
    map,
    visitedSquares
  )
  floodFill(
    rowIndex + 1,
    columnIndex,
    rowLength,
    columnLength,
    originalValue,
    map,
    visitedSquares
  )
  floodFill(
    rowIndex,
    columnIndex + 1,
    rowLength,
    columnLength,
    originalValue,
    map,
    visitedSquares
  )
}
