import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>KnoWIT</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle}  to="/hiw">How.It.Works</Link> | <Link style={linkStyle}  to="/browse">Browse</Link> | <Link style={linkStyle}  to="/help">Help</Link> | <Link style={linkStyle}  to="/about">AboutUs</Link> | <Link style={linkStyle}  to="/signin">SignIn</Link> | <Link style={linkStyle}  to="/signup">SignUp</Link>|<Link style={linkStyle}  to="/domp">˚</Link>           
        </header>
    )
}

const linkStyle={
    color:'#fff',
    textDecoration: 'none'
}

const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    widthMax : '100%',
    
}
export default Header;