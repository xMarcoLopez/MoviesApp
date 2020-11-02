import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];
      if (parametros ['busqueda']) {
        this.busqueda = parametros['busqueda'];
      }
      this._ps.getUnaPelicula(parametros['id'])
        .subscribe(pelicula => this.pelicula = pelicula);
    });
  }

}
