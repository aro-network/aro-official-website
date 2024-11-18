import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Layout } from './Layout.tsx'
import { About } from './pages/About.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />, children: [
      { path: '/', element: <App /> },
      { path: '/about', element: <About /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
