import React, { Component } from 'react'
import axios from 'axios'
import Signup from './components/Signup'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    

    axios.get("https://api.spoonacular.com/recipes/search?query=cheese&number=4&apiKey=27a02bbb5b48401f96bfda6a7d3e2545")
    .then(res => {
      const recipes = res.data.results;
      console.log("recipes ---->", recipes)
      
      this.setState({data: recipes})

    })
   
    .catch(error => {
      console.log('there is an error', error)
    })

  }
  render() {
    return (
      <div>
        <Signup />
        <ul>
          {this.state.data.map((recipe, id) => <h4 key={id}> {recipe.title} </h4>)}
        </ul>
 
      </div>
    )
  }
}

