import { countCountries } from './solution'

describe('solution', () => {
  const MAP = [
    [5, 4, 4],
    [4, 3, 4],
    [3, 2, 4],
    [2, 2, 2],
    [3, 3, 4],
    [1, 4, 4],
    [4, 1, 1],
  ]

  const MAP_RESULT = 11

  test(`countCountries(${MAP}) should return ${MAP_RESULT}`, () => {
    const result = countCountries(MAP)

    expect(result).toEqual(MAP_RESULT)
  })
})
