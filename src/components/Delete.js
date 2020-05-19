import React from 'react';
import './App.css';
import Charles from './Charle'



 class Delete extends React.Component{

  render(){
  return (
    <div id="navAndpageWrapper">
        <Charles/>
          <div id="studyPage">
          <div id="logoDiv"></div>
          <div id="deleteDeck"><div id="choose">Choose</div><br/> deck to delete</div>
          <form id="studyPageForm" onSubmit={this.getDecks}>
          <input id="studySearch" type="text" placeholder="Your decks"></input>
          <input id="studySubmit" type="submit" value="Delete"></input>  
          </form>
        </div>
</div>
  );
  }
}

export default Delete;