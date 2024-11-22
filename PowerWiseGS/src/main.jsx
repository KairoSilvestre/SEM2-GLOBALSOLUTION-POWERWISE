import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Quiz from './pages/Quiz.jsx'
import EcoDicas from './pages/EcoDicas.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Energias from './pages/Energias.jsx'
import EcoWise from './pages/EcoWise.jsx'

const router = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children: [
    {index:true, element:<Home/>},
    {path:'/sobre', element:<Sobre/>},
    {path:'/quiz', element:<Quiz/>},
    {path:'/ecodicas', element:<EcoDicas/>},
    {path:'/ecowise', element:<EcoWise/>},
    {path:'/ecodicas/:nome', element:<Energias/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
