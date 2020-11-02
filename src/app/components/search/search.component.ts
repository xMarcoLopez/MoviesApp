import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  peliculas: any[] = [];
  loading: boolean;

  constructor(public _ps: PeliculasService, public route: ActivatedRoute) {
    this.route.params.subscribe(parametros => {
      if (parametros['termino']) {
        this.peliculas = parametros['termino'];
        this.buscarPelicula(parametros['termino']);
      }
    });
  }

  buscarPelicula(termino: string) {
    this.loading = true;
    if (termino.length === 0) {
      return;
    }
    this._ps.getPelicula(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.peliculas = data;
        this.loading = false;
      });
  }
}
