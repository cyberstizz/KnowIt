import React, { Component } from 'react';
import Card from './Card';
import '../styles/DOMp.css';

export default class DOMp extends Component {
    render() {
        return (
            <React.Fragment >

                <div className = "Header">
                    <div className = "NavBar">
                        <p className ="bx"> <b >KnoWIT</b></p>                            
                        <p className ="headR"> HowIt Works   |   Search  |   Help   |   AboutUs    [ SignIn | SignUp ]</p>
                        {/* <p style={bx}> <b >KnoWIT</b></p>                            
                        <p style={headR}>HowIt Works   |   Search  |   Help   |   AboutUs    [ SignIn | SignUp ]</p> */}
                    </div>
                </div>

                <div className = "SideBar">
                    <ul> DASHBOARD
                        <li>       </li>
                        <li>STUDY</li>
                        <li>       </li>
                        <li>CREATE</li>
                        <li>       </li>
                        <li>EDIT</li>
                        <li>       </li>
                        <li>DELETE</li>
                        <li>       </li>
                        <li>SHARE</li>
                        <li>       </li>
                        <li>SETTINGS</li>
                        <li>       </li>>
                        <li>SIGNOUT</li>
                        <li>       </li>
                    </ul>
                </div>

                <div className = "mainDOMp">
                    <Card/>
                </div>

                

            </React.Fragment>
        );
    };
};

