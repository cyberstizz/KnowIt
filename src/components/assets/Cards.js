import React, { Component } from 'react'
import Cards from './Cards'
import Decks from './Decks'
import Notes from './Notes'
import img1 from '../img/SevenKeyElementofPMP.jpg'
export default class DOMp extends Component {
    render() {
        return (
            <React.Fragment>

                <div className = "card4note">
                <img src={img1} alt=" A list of  Seven Key Element of a Successful Project" style={card_temp_Style}/>  {/* define Margines, boundaries, Padding & SizeConstrains in SASS */}
                    <div className = "note4card">
                        <p className = "cardNote" style={note_temp_style}><b>CARD TITLE:  Project Planning...    </b>        
                         LoremIpsum: El sector educativo, con un volumen de 5 trillones de dólares, ede forma constante.    ProjectPlanning |<b>DECK</b> [Project Managment |<b>BOK</b>] </p> 
                        {/* <h4 className = "cardTitle"> Title_Goes_Here</h4> */}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


const note_temp_style ={
    color: '#10d9',
    background:'#ddd',
    // width:'80%',
    // border: '5px solid lightgrey',
    // padding:'5px',
    wordWrap: 'break-word',
    marginTop: '0',
    maxWidth: '35%',
    marginLeft: '25%',
    marginRight: '25%',
    textAlign: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
}

const card_temp_Style = {
    display: 'block',
    marginTop: '50px',
    // float: 'center',
    maxWidth: '35%',
    height: 'auto',
    marginLeft: '25%',
    marginRight: '25%',
    border: '1px solid #ddd',
    objectFit: 'contain',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',

    // .responsive{}
    // @mdedia only screen and (max-width: 700px){}
}

