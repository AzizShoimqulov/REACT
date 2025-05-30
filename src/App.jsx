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
        index:true,
        element: <Landing />
      },
  {
    path: 'about',
    element: <About />,
    children:[
      {
        path:'company',
        element:<h2>Our Company</h2>
      },
      {
        path:'person',
        element:<h2>Our Person</h2>
      }
    ]
  },
  {
    path: 'newsletter',
    element: <Newsletter />
  },
]
},
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
