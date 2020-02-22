import React from 'react'
import './App.css'
import Header from '../Header'
import Landing from '../Landing'
import Evaluacion from '../Evaluacion'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <div className="App__container">
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/evaluacion" exact component={Evaluacion} />
        </Switch>
      </div>
    </div>
  )
}

export default App
