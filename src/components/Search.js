import React from 'react';

class Search extends React.Component {
    render() {
      const { findCharacter, searchCharacter} = this.props;
        return(
            <div className="search__container" >
                <label htmlFor="">Busca tu personaje favorito</label>
                <input id="" type="text" name=""  onChange={searchCharacter} value={findCharacter} />
            </div>
        )
    }
}

export default Search;