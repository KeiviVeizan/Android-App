import React from 'react'
import Card from './Card'

function Tarjeta(props) {
    const informacion = props.informacion
  return (
    <section>
        {informacion.map(infor => {
            return(
                <Card informacion = {infor}/>
            )
        })}
    </section>
  )
}

export default Tarjeta