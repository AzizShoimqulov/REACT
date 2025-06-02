import React from 'react';
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
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'about',
        element: <About />,
      },
      { path: 'newsletter', element: <Newsletter /> },
      { path: 'cocktail', element: <Cocktail /> }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
