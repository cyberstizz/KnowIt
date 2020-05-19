import React from 'react';
import './App.css';
import Charles from './Charle'



 class Study extends React.Component{

  render(){
  return (
    <div id="navAndpageWrapper">
        <Charles/>
          <div id="studyPage">
          <div id="logoDiv"></div>
          <form id="editPageForm" onSubmit={this.getDecks}>
          <input id="editSearch" type="text" placeholder="Select Deck"></input>
          <input id="editSearch" type="text" placeholder="Select Card"></input>
          <input id="editSubmit" type="submit" value="Add"></input>  
          </form>
        </div>
</div>
  );
  }
}

export default Study;