import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar'
import Food from '../Fridge/Fridge'
import Recipepage from '../Recipe/RecipePage'
import HomePage from '../Home/HomePage'
import HomeHindi from './HomeHindi'
import Creativity from '../Creativity/Creativity'
import './Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className='home-container'>
                <Router>
                    <div>
                        <NavBar/>
                        <div className='component-container'>
                        <Route exact path='/' render={(props) => <HomePage {...this.props} />} />
                        <Route exact path='/hi' render={(props) => <HomeHindi {...this.props} />} />
                        <Route exact path='/food' render={(props) => <Food {...this.props} />} />
                        <Route exact path='/recipepage' component={Recipepage} />
                        <Route exact path='/creativity' component={Creativity} />
                       </div>
                    </div>
                </Router>
            </div>
        )
    }
}
