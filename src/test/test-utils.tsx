import { AppStore, RootState, setupStore } from '@/store'
import { PreloadedState } from '@reduxjs/toolkit'
import { RenderOptions, render } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
