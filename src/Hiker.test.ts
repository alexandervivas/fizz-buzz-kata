import { assert, property, string } from 'fast-check'
import { Hiker } from './Hiker'

describe('Hiker', () => {
  it('answers 42 for any question', () => {
    assert(property(string(), (question) => {
      // Arrange
      const hiker = new Hiker()

      // Act
      hiker.printFizzBuzz();

    }))
  })
})
