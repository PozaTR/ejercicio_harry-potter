import React from 'react';

const CardCharacter = props => {
    return (
        <div className="main__character__card" >
        <h2 className="main__character__name" >{props.character.name}</h2>
        <div className="main__character__image-container" >
          <img  className="main__character__image" src={props.character.image} alt={props.character.name} />
        </div>
        <p className="main__character__house" >{props.character.house}</p>
      </div>
    )     
}

export { CardCharacter }