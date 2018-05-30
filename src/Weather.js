import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import WeatherInfo from './WeatherInfo'
// import './Nasa.css'

class Weather extends Component {
  render = () => {
    return (
      <div className="Wheather">
        <img className="logo" src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/logo_OpenWeatherMap_orange.svg" alt="Weather" />

        {/* <h2>Select a mars rover.</h2> */}
        <ul className="nav-links">
          <li>
            <NavLink to='/weather/London'>London, UK</NavLink>
          </li>
          <li>
            <NavLink to='/weather/indi'>Indiana, USA</NavLink>
          </li>
          <li>
            <NavLink to='/weather/seoul'>Seoul, Kr</NavLink>
          </li>
        </ul>

        <Route exact path={this.props.match.url} render={() => (
          <h2>No rover selected.</h2>
        )} />

        <Route path={`${this.props.match.url}/:rover`} component={WeatherInfo}/>
      </div>
    )
  }
}

export default Weather