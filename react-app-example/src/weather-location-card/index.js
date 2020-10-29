import React from 'react'
import styles from './styles.module.css'

const WeatherImage = ({ image, title }) => {
  return (
    <img src={image} alt={title} />
  )
}

class WeatherCard extends React.Component {
  constructor(props) {
    super(props)

    const { _, name, country, observationTime, temperature, weatherIcon, weatherDescription } = this.props

    this.state = {
      name,
      country,
      observationTime,
      temperature,
      weatherIcon,
      weatherDescription,
      secondsCounter: 0,
      refreshCounter: 0
    }
    this.queryParameter = '';
    this.interval = null
  }

  convertToQueryString(str) {
    return str.replace(' ', '%20');
  }

  retriveRequiredInfo(obj) {
    return {
      name: obj.location.name,
      country: obj.location.country,
      observationTime: obj.current.observation_time,
      temperature: obj.current.temperature,
      weatherIcon: obj.current.weather_icons[0],
      weatherDescription: obj.current.weather_descriptions[0]
    }
  }

  handleMouseOver = () => {
    this.interval = setInterval(() => {
      this.setState({
        secondsCounter: this.state.secondsCounter + 1
      })
    }, 1000);
  }

  handleMouseOut = () => {
    clearInterval(this.interval)
  }

  handleRefresh = () => {
    this.queryParameter = this.convertToQueryString(this.state.name);
    const baseUrl = 'http://api.weatherstack.com/current?access_key=ccdae481df08973b620e0a6e3952fd9e&query=';
    const endpoint = `${baseUrl}${this.queryParameter}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const newState = this.retriveRequiredInfo(data)
        this.setState(
          Object.assign(this.state, newState)
        )
      });
    this.setState({
      refreshCounter: this.state.refreshCounter + 1
    })
  }

  render() {
    const { name, country, observationTime, temperature, weatherIcon, weatherDescription } = this.state

    return (
      <div className={styles.container} onMouseEnter={this.handleMouseOver} onMouseLeave={this.handleMouseOut}>
        <div>
          <div className={styles['location-name']}>{name}</div>
          <div className={styles['location-country']}>{country}</div>
          <div className={styles['location-time']}>{observationTime}</div>
        </div>
        <div className={styles['weather-image']}>
          <WeatherImage image={weatherIcon} title='Weather Image' />
        </div>
        <div className={styles.temperature}>{temperature} &deg; degrees</div>
        <div className={styles.weatherDescription}>{weatherDescription}</div>
        <div className={styles['weather-seconds']}>Seconds passed: {this.state.secondsCounter}</div>
        <button onClick={this.handleRefresh}>Refresh</button>
        <div className={styles.refresh}>Times refershed: {this.state.refreshCounter}</div>
      </div>
    )
  }
}

export default WeatherCard

