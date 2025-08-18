import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import HomePage from './Pages/HomePage'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements  (
      <Route path='/' element = {<RootLayout />}>
        <Route index element={ <HomePage />} />
        <Route path='About' element={ <About />} />
        <Route path='Contact' element={ <Contact />} />
        <Route path='Projects' element={ <Projects />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
