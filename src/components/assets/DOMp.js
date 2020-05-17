import React, { Component } from 'react'
import Cards from './Cards'
import Decks from './Decks'
import Notes from './Notes'
import img1 from '../img/SevenKeyElementofPMP.jpg'
export default class DOMp extends Component {
    render() {
        return (
            <React.Fragment>

                <div className = "card">
                <img src={img1} alt=" A list of  Seven Key Element of a Successful Project"/>
                </div>
            </React.Fragment>
        )
    }
}
