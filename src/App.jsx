import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import RecipeDetails from './pages/recipe-details'
import Home from './pages/home'
import Favorites from './pages/favorites'

function App() {

  return (
    <>
      <div className='min-h-screen bg-cream text-lg'>
        <Navbar />
        <Routes>
         <Route 
          path='/'
          element={<Home />}
          />
          <Route 
          path='/favorites'
          element={<Favorites />}
          />
          <Route 
          path='/recipe/:id'
          element={<RecipeDetails />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App
