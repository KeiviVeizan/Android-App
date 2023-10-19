import React from 'react'
import Encabezado from './Encabezado'
import Info from './Info'

function Card(props) {
    const informacion = props.informacion
  return (
    <div className='card'>
        <Encabezado/>
        <Info informacion = {informacion}/>

    </div>
  )
}

export default Card