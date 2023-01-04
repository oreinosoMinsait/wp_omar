console.log('This is index.js');

// It's executed when page is loaded sucessfully
window.onload = () => {
  console.log('window onloaded');
  // Init listeners
  addListeners();

  // Init content
  indexView();
}

// Variable content selector
var variableContent = document.querySelector('#variable-content');

// Listeners
const addListeners = () => {
  document.querySelector('.main-nav__logo').addEventListener('click', indexView);
  document.querySelector('#dict').addEventListener('click', listView);
}

// Index view
const indexView = () => {
  variableContent.innerHTML = indexVariableContent;
}

// var indexVariableContent = readFile(./html/index-grid.html);

var indexVariableContent = `
  <!-- Index grid -->
  <div class="index-grid">

    <!-- First row -->
    <article class="index-grid__row">
      <header>
        <h2 class="index-grid__row-title">Noticias</h2>
      </header>
      <div class="index-grid__content">
        <section class="index-grid__column">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis adipisci, iure provident
            accusantium obcaecati placeat aliquam ullam corporis, reiciendis hic ducimus cum rerum maxime
            minus
            sit cumque corrupti praesentium.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis adipisci, iure provident
            accusantium obcaecati placeat aliquam ullam corporis, reiciendis hic ducimus cum rerum maxime
            minus
            sit cumque corrupti praesentium.</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
      </div>
    </article>

    <!-- Second row -->
    <article class="index-grid__row">
      <header>
        <h2 class="index-grid__row-title">Novedades</h2>
      </header>
      <div class="index-grid__content">
        <section class="index-grid__column">
          <h3 class="index-grid__column-title">Últimos jugados</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos perspiciatis voluptate omnis iste sunt
            repudiandae numquam doloremque, dolore illo placeat molestiae delectus ea, eos minima quo necessitatibus
            nobis aliquid reiciendis, temporibus distinctio. Obcaecati repellendus fuga ab libero itaque ex, animi natus
            corrupti! Ullam natus magni commodi necessitatibus officiis fuga tenetur, iusto perferendis ratione eligendi
            quo ex expedita reprehenderit possimus deserunt hic iste ipsa inventore corporis optio dolore eius. Porro
            quidem culpa id atque doloribus adipisci voluptates, iure ad nam architecto repudiandae deserunt quibusdam,
            aperiam sapiente odit dolore consequuntur? Similique quas totam provident magnam ex fugiat sit et id! Ipsam
            error suscipit, soluta itaque fuga modi corporis dignissimos. Ut maiores itaque ex voluptatibus fugit
            aspernatur quam quis quia corrupti facilis alias aut perspiciatis eius aliquam, soluta vitae vero eligendi
            pariatur et autem exercitationem minus! Perspiciatis doloribus adipisci assumenda dolor, omnis fugiat fugit
            sequi magni quisquam expedita labore quas laboriosam pariatur.</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
        <section class="index-grid__column">
          <h3 class="index-grid__column-title">Juego del mes</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem minus esse facere illum atque
            suscipit adipisci animi dicta quia. Alias nihil saepe quaerat, impedit obcaecati mollitia? Iure, deserunt
            doloremque.</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
      </div>
    </article>

    <!-- Third row -->
    <article class="index-grid__row">
      <header>
        <h2 class="index-grid__row-title">Reglas añadidas</h2>
      </header>
      <div class="index-grid__content">
        <section class="index-grid__column">
          <h3 class="index-grid__column-title">Spirit Island</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quos perspiciatis voluptate omnis iste sunt
            repudiandae numquam doloremque, dolore illo placeat molestiae delectus ea, eos minima quo necessitatibus
            nobis aliquid reiciendis, temporibus distinctio. Obcaecati repellendus fuga ab libero itaque ex, animi natus
            corrupti! Ullam natus magni commodi necessitatibus officiis fuga tenetur, iusto perferendis ratione eligendi
            quo ex expedita reprehenderit possimus deserunt hic iste ipsa inventore corporis optio dolore eius. Porro
            quidem culpa id atque doloribus adipisci voluptates, iure ad nam architecto repudiandae deserunt quibusdam,
            aperiam sapiente odit dolore consequuntur? Similique quas totam provident magnam ex fugiat sit et id! Ipsam
            error suscipit, soluta itaque fuga modi corporis dignissimos. Ut maiores itaque ex voluptatibus fugit
            aspernatur quam quis quia corrupti facilis alias aut perspiciatis eius aliquam, soluta vitae vero eligendi
            pariatur et autem exercitationem minus! Perspiciatis doloribus adipisci assumenda dolor, omnis fugiat fugit
            sequi magni quisquam expedita labore quas laboriosam pariatur.</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
        <section class="index-grid__column">
          <h3 class="index-grid__column-title">Arkham Horror: LCG</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolorem minus esse facere illum atque
            suscipit adipisci animi dicta quia. Alias nihil saepe quaerat, impedit obcaecati mollitia? Iure, deserunt
            doloremque.</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
        <section class="index-grid__column">
          <h3 class="index-grid__column-title">Dune Imperium</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus commodi recusandae doloremque
            temporibus at fugiat, neque dolore aliquam optio ullam veritatis libero fuga alias in. Labore enim amet
            dicta corrupti!</p>
          <a class="index-grid__column-link" href="#">Leer más</a>
        </section>
      </div>
    </article>

  </div>
`;