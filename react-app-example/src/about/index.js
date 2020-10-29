import React from 'react';
import Header from '../header';
import Footer from '../footer';
import styles from './styles.module.css'

const About = () => {
    return (
        <React.Fragment>
            <Header />
            <div className={styles.container}>
                Nothing interesting here, just a routing example :)
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About