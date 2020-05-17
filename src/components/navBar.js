import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export class NavBar extends React.Component{
    render(){
        return (
            <div id="Charles">
                <div id="userPic"></div>
                <div id="mainButtons">
                <ul>
                <li>Study</li>
                <li>Create</li>
                <li>Edit</li>
                <li>Delete</li>
                <li>Sign out</li>
                </ul>
                </div>
                <div id="bottomButtons"></div>
            </div>
        );
    }
}

export default NavBar;