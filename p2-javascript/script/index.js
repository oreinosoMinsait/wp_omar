console.log('This is index.js');

// It's executed when page is loaded sucessfully
window.onload = () => {
  console.log('window onloaded');
  // Init listeners
  addListeners();

  // Init content
  // addElement();
}

// Content views
var index_grid = document.querySelector('.index-grid');
var list_grid = document.querySelector('.list-grid');

// Views functions
const indexView = () => {
  index_grid.style.display = 'flex';
  index_grid.style.flexDirection = 'column';

  list_grid.style.display = 'none';
}

const listView = () => {
  index_grid.style.display = 'none';

  list_grid.style.display = 'flex';
}

// Listeners
const addListeners = () => {
  document.querySelector('.main-nav__logo').addEventListener('click', indexView);
  document.querySelector('#dict').addEventListener('click', listView);
}