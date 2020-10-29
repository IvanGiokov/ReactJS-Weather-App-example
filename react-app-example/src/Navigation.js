import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import WeatherPage from './weather-page'
import About from './about'


const Navigation = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WeatherPage} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default Navigation