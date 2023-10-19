import React from 'react'
import { informacion } from '../assents/androidApi'

function Info(props) {
    const informacion = props.informacion
  return (
    <div>
        {informacion.title}
        {informacion.relleno}
        {informacion.costo}
    </div>

  )
}

export default Info