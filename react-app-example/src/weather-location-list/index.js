import React from 'react';
import styles from './styles.module.css'
import WeatherCard from '../weather-location-card'
import PropTypes from 'prop-types'



class WeatherLocationList extends React.Component {
    constructor(props) {
        super(props)
    }

    retrieveRequiredInfo = () => {
        const data = this.props.data
        const outputData = data.reduce((weatherDataAcc, currentData) => {
            const requiredInfoPerLocation = {
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
        return outputData
    }

    renderWeatherInfoLocations = (locations) => {
        return locations.map(lоcation => {
            return (
                <React.Fragment key={lоcation.id}>
                    <WeatherCard {...lоcation} />
                </React.Fragment>
            )
        })
    }

    render() {

        const locations = this.retrieveRequiredInfo();
        return (
            <div className={styles.container}>
                {this.renderWeatherInfoLocations(locations)}
            </div>
        )
    }
}

WeatherLocationList.defaultProps = {
    data: []
}

WeatherLocationList.propTypes = {
    data: PropTypes.array.isRequired
}

export default WeatherLocationList
