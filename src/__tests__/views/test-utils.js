import React from 'react'
import { createStore, applyMiddleware } from 'redux';
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// Import your own reducer
import rootReducer from '../../reducers/index'

function render(
  ui,
  {
    preloadedState,
    store = createStore(
        rootReducer,
        applyMiddleware(thunk)
      ),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }