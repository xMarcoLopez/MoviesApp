import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  populares: any;
  popularesTom: any;
  cartelera: any;
  loading: boolean;

  constructor(private _ps: PeliculasService) {
    this.loading = true;

    this._ps.getPopulares()
      .subscribe(data => {
        console.log(data);
        this.populares = data;
        this.loading = false;
      });

    this._ps.getCartelera()
      .subscribe(data => {
        console.log(data);
        this.cartelera = data;
        this.loading = false;
      });

    this._ps.getPopularesTom()
      .subscribe(data => {
        console.log(data);
        this.popularesTom = data;
        this.loading = false;
      });
  }



}
