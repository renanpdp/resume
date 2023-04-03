import App from '@/App'
import { renderWithProviders } from './test-utils'

describe('Jest', () => {
  test('Jest should work normally', () => {
    expect(1).toBe(1)
  })
  test('Should render App.tsx correctly', () => {
    renderWithProviders(<App />)
    expect(true).toBeTruthy()
  })
})
