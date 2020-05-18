import React from 'react'
import Modals from './components/Modals'
import DOMp from './components/assets/DOMp'
import LoginReqs from './components/LoginReqs'
import UserProvider from './UserProvider'

function App(){


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
export default App;
