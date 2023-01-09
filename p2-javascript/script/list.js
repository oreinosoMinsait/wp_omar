console.log('This is list.js');

// API query with random ids
const randomQuery = (quantity) => {
  const MIN_CHARACTER = 1;
  const MAX_CHARACTER = 826;
  let characters = [];

  for (let i=0; i<quantity; i++){
    characters.push(Math.floor(Math.random() * MAX_CHARACTER) + MIN_CHARACTER);
  }

  return new Promise ((resolve, reject) => {
    fetch('https://rickandmortyapi.com/api/character/' + characters)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      });
  });
}

// Filter characters info
const getCharacters = async (quantity) => {
  let chosenCharacters = await randomQuery(quantity);

  let filteredCharacters = chosenCharacters.map(character => ({
    name: character.name,
    image: character.image,
    description: 'This character is a ' + character.status + ' ' + character.species+ ' ' + character.gender + '.'
    }))
  
  return filteredCharacters;
}

// Insert HTML in the table
const uploadTable = (characters) => {
  let tableRows = '';

  characters.forEach((character) => {
    console.log(character.name, character.image);
    tableRows += `
      <tr class='list-grid__character'>
        <td class='list-grid__character-img'>
          <img src="${character.image}" alt="${character.name}">
        </td>
        <td class='list-grid__character-name'>${character.name}</td>
      </tr>
    `
  })
  document.querySelector('tbody').innerHTML = tableRows;
}