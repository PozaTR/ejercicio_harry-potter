import React from 'react';
import './styles/app.scss';
import logo from './images/logo-harry-potter.png';
import { fetchCharacters } from './services/fetchCharacters';
import Search from './components/Search';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import { Switch, Route } from 'react-router-dom';

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
      const mappedCharacters = characters.map((character, index) => ({
        id: index,
        ...character
      }) )
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
        characters: mappedCharacters,
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
      <div className="app">
        <header className="header" >
          <h1 className="header__title" >Personajes de Harry Potter</h1>
          <img className="header__logo" src={logo} alt="logo Harry Potter" />
        </header>
        <main className="main" >
          <Switch>
              <Route 
              exact path="/"  
              render={routerProps => (
                <React.Fragment>
                  <Search match={routerProps.match} searchCharacter={this.searchCharacter} genderOptions={genderOptions} houseOptions={houseOptions} />
                  <CharactersList match={routerProps.match} characters={characters} name={name} house={house} gender={gender}/>
                </React.Fragment>
                )} 
                />
                <Route
                path="/details/:characterId"
                render={routerProps =>  (
                  <CharacterDetails match={routerProps.match} characters={characters} />
                )}
                />
          </Switch>

        </main>
      </div>
    );
  }
}

export default App;
