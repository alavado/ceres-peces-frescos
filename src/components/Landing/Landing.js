import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="Landing__titulo">Ceres peces</h1>
      <p className="Landing__descripcion">
        Aquí tenemos que poner una descripción de la aplicación<br/>
        Aquí tenemos que poner una descripción de la aplicación
      </p>
      <Link to="/evaluacion" className="Landing__boton">Comenzar<br/>evaluación</Link>
    </div>
  )
}

export default Landing
