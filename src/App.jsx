import { useState } from 'react'
import { informacion } from './assents/androidApi'
import Tarjeta from './componetes/Tarjeta'

function App() {

  return (
    <>
     <Tarjeta informacion ={informacion}/>
    </>
  )
}

export default App
