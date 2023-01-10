console.log('This is detail.js');

const updateDetailView = (character) => {
  console.log(character);

  if (character) {
    detailView.html = `
      <div class="detail">
        <div class="detail__img">
          <img src="${character.image}" alt="${character.name}">
        </div>
      <div class="detail__data">
        <h2>${character.name}</h2>
        <p>${character.description}</p>
      </div>
      </div>
    `;
  }
}