import { Component } from '@angular/core';

@Component({
  selector: 'app-muestra-imagen',
  templateUrl: './muestra-imagen.component.html',
  styleUrls: ['./muestra-imagen.component.scss']
})
export class MuestraImagenComponent {
  imagen1 = 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
  imagen2 = 'https://s1.eestatic.com/2022/12/11/deportes/futbol/725187674_229390661_1024x576.jpg';
  imagen3 = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/1200px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg'

  imagenElegida: string | undefined;

  seleccionImagen(nPersonaje: number) {

    switch (nPersonaje) {
      case 1:
        this.imagenElegida = this.imagen1;
        console.log('imagen1');
        break;
      case 2:
        this.imagenElegida = this.imagen2;
        console.log('imagen1');
        break;
      case 3:
        this.imagenElegida = this.imagen3;
        console.log('imagen1');
        break;
    }
  }
}
