import { setupStore } from '@/store'
import { render, RenderOptions } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

export const renderWithProviders = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })
