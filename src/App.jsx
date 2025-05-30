import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  Landing,
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children:[
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/landing',
    element: <Landing />
  },
  {
    path: '/newsletter',
    element: <Newsletter />
  },
]
},
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
