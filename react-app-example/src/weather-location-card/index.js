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

        this.state = {
          secondsCounter: 0,
          refreshCounter: 0
        }

        this.interval = null
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

      handleRefresh = () =>{
        this.setState({
            refreshCounter: this.state.refreshCounter + 1
        })
      }

    render() {
        const { _, name, country, observationTime, temperature, weatherIcon, weatherDescription } = this.props

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

