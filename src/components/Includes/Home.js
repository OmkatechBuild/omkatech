import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import HomeIndex from './HomeIndex'

class Home extends Component {
    render() {
        return(
            <div className="app">
                <Header {...this.props} />               
                <HomeIndex {...this.props} />
                <Footer {...this.props} />
            </div>
        )
    }
}

export default Home;