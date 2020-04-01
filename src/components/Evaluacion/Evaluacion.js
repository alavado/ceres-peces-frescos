import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFish, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Evaluacion.css'
import { useHistory } from 'react-router-dom'
import { especies } from '../datos/especies'

const Evaluacion = () => {

  const history = useHistory()

  return (
    <div className="Evaluacion">
      <h1 className="Evaluacion__titulo">Seleccione la especie</h1>
      <ul className="Evaluacion__lista-especies">
        {especies.map(({ id, nombre }, i) => (
          <li
            className="Evaluacion__especie"
            style={{ animationDelay: `${i * .1}s` }}
            onClick={() => history.push(`/pregunta/${id}`)}
          >
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
