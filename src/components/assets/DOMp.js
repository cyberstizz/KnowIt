import React, { Component } from 'react';
import Card from './Card';

export default class DOMp extends Component {
    render() {
        return (
            <React.Fragment >
                <div style={styleDOMp}>
                    <Card/>
                </div>
            </React.Fragment>
        );
    };
};

const styleDOMp = {
backgroundColor : 'lightgreen',

}