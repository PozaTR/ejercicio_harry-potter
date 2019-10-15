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
          <div className="details">
             <Link className="details__link" to="/" >Vuelve al listado</Link>
            <div className="detail" >
              <div>
                <h2 className="detail__name">{name}</h2>
                <p>{actor}</p>
              </div>
              <div className="detail__image-container" >
                  <img className="detail__image" src={image} alt={name}></img>
              </div>
              <div>
                <p className="detail__information">{house}</p>
                <p className="detail__information">{species}</p>
                <p className="detail__information">{dateOfBirth}</p>
                <p className="detail__information">{ancestry}</p>
              </div>
            </div>
          </div>
      )
    } else {
      return(
        <Link>Ese personaje no existe</Link>
      )
    }
  }

export default CharacterDetails;
