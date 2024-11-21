import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Layout } from './Layout.tsx'
import { Toaster } from 'sonner'


const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: '/', element: <App /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-center' />
    <RouterProvider router={router} />
  </StrictMode>,
)
