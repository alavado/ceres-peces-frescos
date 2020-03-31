import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
      <h1 className="Landing__titulo">Ceres peces frescos</h1>
      <p className="Landing__descripcion">
        App para identificar algunos atributos de calidad de pescados comercializados en mercados mayoristas o minoristas y reducir el riesgo de enfermedades de transmisión por alimentos
      </p>
      <Link to="/evaluacion" className="Landing__boton">Comenzar<br/>evaluación</Link>
    </div>
  )
}

export default Landing
