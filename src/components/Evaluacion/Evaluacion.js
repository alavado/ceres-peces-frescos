import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Evaluacion.css'

const especies = [
  {
    nombre: 'Congrio'
  },
  {
    nombre: 'Merluza'
  },
  {
    nombre: 'Salmón'
  },
]

const Evaluacion = () => {
  return (
    <div className="Evaluacion">
      <h1 className="Evaluacion__titulo">Seleccione la especie</h1>
      <ul className="Evaluacion__lista-especies">
        {especies.map(({ nombre }, i) => (
          <li className="Evaluacion__especie" style={{ animationDelay: `${i * .1}s` }}>
            <div>
              <FontAwesomeIcon className="Evaluacion__icono" size="lg" icon={faFish} />
              {nombre}
            </div>
            <FontAwesomeIcon className="Evaluacion__icono" size="lg" icon={faChevronCircleRight} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Evaluacion
