import React from 'react';
import './App.css';
import { fetchCharacters } from './services/fetchCharacters';
import Search from './components/Search';
import CharactersList from './components/CharactersList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
      findCharacter: '',
    }

    this.searchCharacter = this.searchCharacter.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
    .then(characters => {
      this.setState({
        characters: characters
      })
    })
  }

  searchCharacter(event) {
    const findCharacter = event.currentTarget.value;
    console.log(fetchCharacters);
    this.setState({
      findCharacter: findCharacter
    })
  }

  render() {
    const { characters, findCharacter} = this.state
    return (
      <div className="App">
        <header className="header" >
          <h1 className="header__title" >Personajes de Harry Potter</h1>
        </header>
        <main className="main" >
          <Search searchCharacter={this.searchCharacter} findCharacter={findCharacter} />
          <CharactersList characters={characters} findCharacter={findCharacter} />
        </main>
      </div>
    );
  }
}

export default App;
