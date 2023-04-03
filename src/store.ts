import counterReducer from '@/features/counter/counter-slice'
import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  counter: counterReducer,
})

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
