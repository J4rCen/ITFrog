import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import { Provider } from 'react-redux'
import { citesTransport } from './utils/CitesTransport.ts'
import createStore from './store/store.ts'

async function getDate() {
  return await citesTransport.citesGet()
}

const store = createStore({cites: await getDate()})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
