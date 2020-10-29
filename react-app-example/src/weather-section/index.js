import React from 'react';
import styles from './styles.module.css'
import WeatherLocationList from '../weather-location-list';
import defaultLocations from '../defaultLocations';
import data from '../data';





class WeatherSection extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            //data
            data: []
        }
    }

    componentDidMount() {
        const baseUrl = 'http://api.weatherstack.com/current?access_key=ccdae481df08973b620e0a6e3952fd9e&query='

        const apiEndPoints = defaultLocations.map((location) => `${baseUrl}${location}`);

        apiEndPoints.forEach((endPoint) => {
            fetch(endPoint)
                .then((response) => response.json())
                .then((json) => {
                    this.setState(
                        {data:[...this.state.data,json]})
                })
                .catch((err) => console.log(err))
        });
    }


    render() {
        return (
            <div className={styles.container}>
                < WeatherLocationList data={this.state.data} />
            </div>

        )
    }
}

export default WeatherSection
