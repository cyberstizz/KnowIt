import React from 'react';
import './App.css';
import Charles from './Charle';
import axios from 'axios';



 class Study extends React.Component{
   constructor(){
     super()
     this.state = {
       inspiration: ''
     }
   }
   componentDidMount(){
  axios.get("https://type.fit/api/quotes")
  .then(response => {
    let quote = response.data;
    this.setState({
      inspiration: quote[3]
    })

  })
}
  render(){
    
  return (
    <div id="navAndStudy">
        <Charles/>
          <div id="studyPage">
          <div id="logoDiv"></div>
          <h1 id="studyWelcome">Welcome user</h1>
          <div id="apiQuote">{this.state.inspiration.text}<br/>-{this.state.inspiration.author}</div>
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