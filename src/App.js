import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = (event) => {
    this.setState({searchField: event.target.value, title: event.target.value});
  }

  render() {
    const {monsters, searchField, title} = this.state;
    const filteredMonsters = monsters.filter(monsters =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Čudovišta, mačke i poneki robot</h1>
        <h1>{title}</h1>
        <SearchBox
          placeholder='Претрага'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;