import React from 'react';
import data from '../data';
import styles from './styles.module.css'
import WeatherCard from '../weather-location-card'

const weatherInfoLocations = data.reduce((weatherDataAcc, currentData) => {
    let requiredInfoPerLocation = {
        id: currentData.location.name,
        name: currentData.location.name,
        country: currentData.location.country,
        observationTime: currentData.current.observation_time,
        temperature: currentData.current.temperature,
        weatherIcon: currentData.current.weather_icons[0],
        weatherDescription: currentData.current.weather_descriptions[0]
    }
    return [...weatherDataAcc, requiredInfoPerLocation]
}, [])

const renderWeatherInfoLocations = (weatherInfoLocations) => {
    return weatherInfoLocations.map(lоcation => {
        return (
            <React.Fragment key={lоcation.id}>
                <WeatherCard {...lоcation} />
            </React.Fragment>
        )
    })
}

class WeatherLocationList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.container}>
                {renderWeatherInfoLocations(weatherInfoLocations)}
            </div>
        )
    }
}

export default WeatherLocationList
