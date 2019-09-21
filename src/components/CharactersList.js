import React from 'react';
import { CardCharacter } from './CardCharacter';

class CharactersList extends React.Component {
    render() {
      const { characters, findCharacter } = this.props
        return(
            <React.Fragment>
              <ul className="main__list" >
              {characters
              .filter(mycharacter => mycharacter.name.toUpperCase().includes(findCharacter.toUpperCase()))
              .map((character, index) => 
              <li className="main__character" key={index}>
                <CardCharacter character={character}/>
              </li>
              )}
            </ul>
            </React.Fragment>

        )
    }
}

export default CharactersList;