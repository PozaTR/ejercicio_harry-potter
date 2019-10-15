import React from 'react';
import '../styles/characterDetails.scss';
import { Link } from 'react-router-dom';

const  CharacterDetails = props =>  {
      const { match, characters } = props;
      const characterId = parseInt(match.params.characterId);
        
      if(characterId > characters.length) {
        return(
            <Link to="/" >Vuelve al listado</Link>
      )
      }

    const character = characters.filter(character => character.id === characterId );
    if(character[0]) {
      const {name, species, image, house, dateOfBirth, ancestry, actor}= character[0];

      return(
        <React.Fragment>
          <div className="details" >
            <div>
              <h2 className="details__name">{name}</h2>
              <p>{actor}</p>
            </div>
            <div className="details__image-container" >
                <img className="details__image" src={image} alt={name}></img>
            </div>
            <div>
              <p>{house}</p>
              <p>{species}</p>
              <p>{dateOfBirth}</p>
              <p>{ancestry}</p>
            </div>
          </div>
          <Link to="/" >Vuelve al listado</Link>
        </React.Fragment>
      )
    } else {
      return(
        <Link>Ese personaje no existe</Link>
      )
    }
  }

export default CharacterDetails;
