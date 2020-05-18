import React from 'react'
import Modals from './Modals'
import DOMp from './DOMp'
import LoginReqs from './LoginReqs'
import UserProvider from '../UserProvider'

function Main(){


    return (
      <React.Fragment>
        
        <UserProvider>
          <LoginReqs/>
        </UserProvider>
        
        <Modals/>
        <DOMp/>
      </React.Fragment> 

    )
}
export default Main;
