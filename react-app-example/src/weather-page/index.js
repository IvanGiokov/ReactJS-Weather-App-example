import React from 'react';
import Header from '../header'
import WeatherSection from '../weather-section'
import Footer from '../footer'

const WeatherPage = () =>{
return(
    <React.Fragment>
        <Header />
        <WeatherSection />
        <Footer />
    </React.Fragment>
)
}

export default WeatherPage