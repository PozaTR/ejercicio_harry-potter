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
      genderOptions: [], 
      houseOptions: [], 
      name: '',
      house: '',
      gender: '',

    }

    this.searchCharacter = this.searchCharacter.bind(this);
  }

  componentDidMount() {
    fetchCharacters()
    .then(characters => {
      const genderOptions = characters.reduce((acc, character) => {
        if(acc.findIndex(gender => gender === character.gender) === -1) {
          acc.push(character.gender)
        }
        return acc
      }, []);
      const houseOptions = characters.reduce((acc, character) => {
        if(character.house && acc.findIndex(house => house === character.house) === -1) {
          acc.push(character.house)
        }
        return acc
      }, []);
      this.setState({
        characters: characters,
        genderOptions: genderOptions,
        houseOptions: houseOptions
      })
    })
  }

  searchCharacter(event) {
    const value = event.currentTarget.value;
    const id = event.currentTarget.id;

    this.setState({
      [id] : value
    })
  }

  render() {
    const { characters, house, name, gender, genderOptions, houseOptions} = this.state
    return (
      <div className="App">
        <header className="header" >
          <h1 className="header__title" >Personajes de Harry Potter</h1>
        </header>
        <main className="main" >
          <Search searchCharacter={this.searchCharacter} genderOptions={genderOptions} houseOptions={houseOptions} />
          <CharactersList characters={characters} name={name} house={house} gender={gender} />
        </main>
      </div>
    );
  }
}

export default App;
