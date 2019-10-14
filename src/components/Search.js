import React from 'react';
import '../styles/search.scss';

class Search extends React.Component {
    render() {
      const { findCharacter, searchCharacter, houseOptions, genderOptions } = this.props;
        return(
            <div className="search__container" >
              <div>
                <label htmlFor="name">Busca tu personaje favorito</label>
                <input className="search__input" id="name" type="text" name="name"  onChange={searchCharacter} value={findCharacter} />
              </div>
                <div className="select__container__house" >
                  <label htmlFor="house" >Casa</label>
                  <select className="search__input" id="house" onChange={searchCharacter}>
                    <option value="" >Todas</option>
                    {houseOptions.map((houseOption, index) => 
                      <option key={index} value={houseOption} >{houseOption}</option>
                      )}
                  </select>
                </div>
                <div className="select__container__gender" >
                  <label htmlFor="gender" >Género</label>
                  <select className="search__input" id="gender" onChange={searchCharacter}>
                    <option value="" >Ambos</option>
                    {genderOptions.map((genderOption, index) =>
                      <option key={index} value={genderOption} >{genderOption}</option>
                      )}
                  </select>
                </div>
            </div>
        )
    }
}

export default Search;