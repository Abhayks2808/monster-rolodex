import React, { Component } from 'react';
import { CardList } from './Components/card-list/card-list'
import {Searchbox} from './Components/search-box/search-box'
import './App.css'

class APP extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: ''
    };
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = e => {
    this.setState({searchfield:e.target.value})
  }

  render() {
    const { monsters, searchfield } = this.state;
    const filterdmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox 
        placeholder='search monsters'
        handleChange={this.handleChange}/>
        <CardList monsters={filterdmonsters}>
        </CardList>

      </div>
    )
  }
}
export default APP;
