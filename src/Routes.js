import React, { Component } from 'react'
import Home from './components/Includes/Home'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Header from './components/Includes/Header'
import Footer from './components/Includes/Footer'
import HomeIndex from './components/Includes/HomeIndex'

class Routes extends Component {
    render() {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" render={(props) => <Home {...props} />} /> 
                        <Route exact path="/Header" render={(props) => <Header {...props} />} />
                        <Route exact path="/Footer" render={(props) => <Footer {...props} />} />
                        <Route exact path="/HomeIndex" render={(props) => <HomeIndex {...props} />} />                   
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;