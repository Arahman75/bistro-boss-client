import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <div className='max-w-screen-xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </QueryClientProvider>

    </AuthProvider> */}
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
