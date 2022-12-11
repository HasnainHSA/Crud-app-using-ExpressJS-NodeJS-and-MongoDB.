import React from 'react'
import Muicard from './Components/Muicard'
import Profile from './Components/Modal'
import './App.css'
import MenuAppBar from './Components/MenuAppBar'
import MuiFooter from './Components/Footer'

const App = () => {
  return (
    <>
    <MenuAppBar/>
    <div className='modalspacx'>
    <Profile/>
    </div>
    <Muicard/>

    <MuiFooter/>
    </>
  )
}

export default App