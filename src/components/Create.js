import React from 'react';
import './App.css';
import Charles from './Charle'



 class Create extends React.Component{

  render(){
  return (
    <div id="navAndpageWrapper">
        <Charles/>
          <div id="createPage">
          <div id="logoDiv"></div>
          <form id="createPageForm" onSubmit={this.getDecks}>
          <input id="createSearch" type="text" placeholder="What is the name of your deck?"></input>
          <input id="createSearch" type="text" placeholder="Give your deck a category name"></input>
          <input id="createSubmit" type="submit" value="Create Deck"></input> 
          </form>
          </div> 
        </div>
  );
  }
}

export default Create;