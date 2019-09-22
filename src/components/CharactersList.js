import React from 'react';
import { CardCharacter } from './CardCharacter';
import { Link } from 'react-router-dom';

class CharactersList extends React.Component {
    render() {
      const { characters, name, house, gender } = this.props
        return(
            <React.Fragment>
              <ul className="main__list" >
              {characters
              .filter(mycharacter => mycharacter.name.toUpperCase().includes(name.toUpperCase()))
              .filter(myhouse => !house || myhouse.house === house)
              .filter(mygender => !gender || mygender.gender === gender)
              .map((character, index) => 
              <li className="main__character" key={index}>
                <Link to={`/details/${character.id}`}>
                  <CardCharacter character={character}/>  
                </Link>
              </li>
              )}
            </ul>
            </React.Fragment>

        )
    }
}

export default CharactersList;