import App from '@/App'
import { render } from './test-utils'

describe('Jest', () => {
  test('Jest should work normally', () => {
    expect(1).toBe(1)
  })
  test('Should render App.tsx correctly', () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
