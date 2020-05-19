import React from 'react';
import './App.css';
import Charles from './Charle'



 class Study extends React.Component{

  render(){
  return (
    <div id="navAndStudy">
        <Charles/>
          <div id="studyPage">
          <div id="logoDiv"></div>
          <h1 id="studyWelcome">Welcome user</h1>
          <div id="apiQuote">api quote></div>
          <div id="studyCount">you have blank decks</div>
          <form id="studyPageForm" onSubmit={this.getDecks}>
          <input id="studySearch" type="text" placeholder="Your shows"></input>
          <input id="studySubmit" type="submit" value="Study"></input>  
          </form>
        </div>
</div>
  );
  }
}

export default Study;