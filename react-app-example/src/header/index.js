import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import { BrowserRouter as Router, } from "react-router-dom"

class Header extends Component {
    state = {
        searchValue: ""
    }

    handleChange = (event) => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        const { searchValue } = this.state
        return (
            <Router>
                <div className={styles["header-container"]}>
                    <Link className={styles["home-link"]} to={'/'}> Weather Page</Link>
                    <input value={searchValue} onChange={this.handleChange} placeholder="Search..." />
                </div>
            </Router>
        )
    }

}

export default Header