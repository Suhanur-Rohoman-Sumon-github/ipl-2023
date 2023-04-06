import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Machecs from './componnets/Maches/Machecs'
import News from './componnets/News/News'
import Standings from './componnets/Standings/Standings'
import Players from './componnets/Players/Player'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Machecs />,
        loader:()=> fetch('team.json')
      },
      {
        path:'News',
        element:<News />,
        loader:()=>fetch('news.json')
      },
      {
        path:'Standings',
        element:<Standings />,
        loader:()=>fetch('poient.json')
      },
      {
        path:'Players',
        element:<Players />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
