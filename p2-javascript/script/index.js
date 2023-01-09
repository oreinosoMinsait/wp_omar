console.log('This is index.js');

// Defining view class
class View {
  constructor(name, path)
  {
    this._name = name;
    this._html = '';
    this._path = path;
  }

  get html() {
    return this._html;
  }

  set html(html) {
    this._html = html;
  }

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
    if (currentView != this._name){
      currentView = this._name;
      document.querySelector('#variable-content').innerHTML = this._html;
    } else {
      alert('Ya estamos aquí');
    }
  }
}

// Variables:
var indexView = new View('index', './html/index-grid.html');
var listView = new View('list', './html/list-grid.html');
var currentView = '';
var charactersInfo = [];

// Listeners (it needs a function that calls the class method)
const addListeners = () => {
  document.querySelector('.main-nav__logo').addEventListener('click', () => indexView.changeView());
  document.querySelector('#dict').addEventListener('click', () => {
    listView.changeView();
    uploadTable(charactersInfo);
  });
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
      // TODO: uncomment timeout
      // setTimeout(() => alert('Bienvenido a Live 2 Play'), 2000);
    })
  
  listView.loadView();
  getCharacters(5)
    .then((characters) => charactersInfo = characters);
}