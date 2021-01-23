import { Hello } from '@/hello'

describe('Hello', () => {
  it('say Hello World', () => {
    expect(new Hello().say()).toBe('Hello World')
  })
})
