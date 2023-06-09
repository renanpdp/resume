import { renderWithProviders } from '@/test/test-utils'
import { fireEvent, screen } from '@testing-library/react'
import Home from './home'

describe('Home page tests', () => {
  it('Should render page correctly', async () => {
    // Setup
    renderWithProviders(<Home />)
    const buttonCount = await screen.findByRole('button')

    // Pre expectations
    expect(buttonCount.innerHTML).toBe('count is 0')

    // Init
    fireEvent.click(buttonCount)
    fireEvent.click(buttonCount)

    // Post expectations
    expect(buttonCount.innerHTML).toBe('count is 2')
  })

  it('Should render page correctly with preloaded state', async () => {
    // Setup
    renderWithProviders(<Home />, { preloadedState: { counter: { count: 1 } } })
    const buttonCount = await screen.findByRole('button')

    // Pre expectations
    expect(buttonCount.innerHTML).toBe('count is 1')

    // Init
    fireEvent.click(buttonCount)

    // Post expectations
    expect(buttonCount.innerHTML).toBe('count is 2')
  })
})
