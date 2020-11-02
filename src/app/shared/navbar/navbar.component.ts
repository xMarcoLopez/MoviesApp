import { Component } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent {
  peliculas: any[] = [];

  constructor(public _ps: PeliculasService, private router: Router) { }

  buscarPelicula(termino: string) {
    if (termino.length === 0) {
      return;
    }
    this.router.navigate(['search', termino]);
  }
}
