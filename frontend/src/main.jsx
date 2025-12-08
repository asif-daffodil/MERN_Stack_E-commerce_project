import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
)
