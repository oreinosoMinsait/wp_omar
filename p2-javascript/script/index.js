console.log('This is index.js');

// All views objects
var indexView = {
  html: '',
  path: './html/index-grid.html',
}

var listView = {
  html: '',
  path: './html/list-grid.html',
}

// Variable content selector
var variableContent = document.querySelector('#variable-content');

// Listeners
const addListeners = () => {
  document.querySelector('.main-nav__logo').addEventListener('click', setIndexView);
  document.querySelector('#dict').addEventListener('click', setListView);
}

// Common function to load views. It needs a promise to be sure data is loaded before setting it
const loadView = (view) => {
  return new Promise ((resolve, reject) => {
    fetch(view.path)
    .then((response) => response.text())
    .then((data) => {
      view.html = data;
      resolve();
    });
  })
}

// Change view
const changeView = (view) => {
  variableContent.innerHTML = view.html;
}

// Change to index view
const setIndexView = () => {
  changeView(indexView);
  console.log('Index view setted');
}

// Change to list view
const setListView = () => {
  changeView(listView);
}

// It's executed when page is loaded sucessfully
window.onload = () => {
  console.log('window onloaded');

  // Init listeners
  addListeners();

  // Init content
  loadView(indexView)
    .then(() => {
      setIndexView();
    })

  // listView loaded after page is charged for first time
  loadView(listView);
}