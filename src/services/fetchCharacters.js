const endpoint = 'https://hp-api.herokuapp.com/api/characters';

const fetchCharacters = () => fetch(endpoint).then(response => response.json());

export { fetchCharacters }