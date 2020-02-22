import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="Landing__titulo">Ceres peces</h1>
      <p>

      </p>
      <Link to="/evaluacion" className="Landing__boton">Evaluar</Link>
    </div>
  )
}

export default Landing
