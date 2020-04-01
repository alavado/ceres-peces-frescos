import React, { useState } from 'react'
import './Pregunta.css'
import './range.css'
import pescado1 from '../../../assets/especies/pescado1.png'
import pescado2 from '../../../assets/especies/pescado2.png'
import pescado3 from '../../../assets/especies/pescado3.png'

const alternativas = [
  {
    imagen: pescado3,
    enunciado: 'Color amarillento'
  },
  {
    imagen: pescado2,
    enunciado: 'Piel ligeramente nacarada'
  },
  {
    imagen: pescado1,
    enunciado: 'Piel nacarada'
  }
]

const Pregunta = () => {

  const [alternativa, setAlternativa] = useState(2)

  return (
    <div className="Pregunta">
      <h1 className="Pregunta__enunciado">Evalúe la apariencia de la piel</h1>
      <div className="Pregunta__contenedor_imagen">
        <img className="Pregunta__imagen" src={alternativas[alternativa].imagen} />
        <div className="Pregunta__alternativa">{alternativas[alternativa].enunciado}</div>
      </div>
      <input
        className="Pregunta__slider_alternativas"
        type="range"
        min={0}
        max={alternativas.length - 1}
        step={1}
        onChange={e => setAlternativa(e.target.value)}
      />
      <button className="Pregunta__boton_siguiente">Siguiente</button>
    </div>
  )
}

export default Pregunta
