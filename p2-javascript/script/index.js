console.log('This is index.js');

// Defining view class
class View {
  constructor(path)
  {
    this._html = '';
    this._path = path;
  }

  // Not needed
  // get html () {
  //   return this._html;
  // }

  // It returns a promise to be sure that html is loaded before setting it
  loadView() {
    return new Promise ((resolve, reject) => {
      fetch(this._path)
      .then((response) => response.text())
      .then((data) => {
        this._html = data;
        resolve();
      });
    })
  }

  changeView() {
    document.querySelector('#variable-content').innerHTML = this._html;
  }
}

// All views objects
var indexView = new View('./html/index-grid.html');
var listView = new View('./html/list-grid.html');

// Listeners (it needs a function -> that function call the class method)
const addListeners = () => {
  document.querySelector('.main-nav__logo').addEventListener('click', () => indexView.changeView());
  document.querySelector('#dict').addEventListener('click', () => listView.changeView());
}

// It's executed when page is loaded sucessfully
window.onload = () => {
  console.log('window onloaded');

  // Init listeners
  addListeners();

  // Init content
  indexView.loadView()
    .then(() => {
      indexView.changeView();
    })
  
  listView.loadView();
}