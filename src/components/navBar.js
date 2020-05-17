import React from 'react';
import './App.css';

export class NavBar extends React.Component{
    render(){
        return (
            <div id="Charles">
                <div id="userPic"></div>
                <div id="mainButtons"></div>
                <ul>
                <li>Study</li>
                <li>Create</li>
                <li>Edit</li>
                </ul>
            </div>
        );
    }
}

export default NavBar;