import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from './app/App'
import 'normalize.css'
import './index.css'
import { store } from './redux/store'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
)
