import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&language=es`;
    const apikey = '6762b5133055dd523f202dae5d221d27';
    return this.http.get(`${url}&api_key=${apikey}`);

  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);
    const desdeStr = [desde.getFullYear(), desde.getMonth() + 1 < 10 ? (desde.getMonth() + 1).toString().padStart(2, '0')
      : desde.getMonth() + 1, desde.getDate() < 10 ? (desde.getDate()).toString().padStart(2, '0') : desde.getDate()].join('-');
    const hastaStr = [hasta.getFullYear(), hasta.getMonth() + 1 < 10 ? (hasta.getMonth() + 1).toString().padStart(2, '0')
      : hasta.getMonth() + 1, hasta.getDate() < 10 ? (hasta.getDate()).toString().padStart(2, '0') : hasta.getDate()].join('-');

    return this.getQuery(`/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}`)
      .pipe(
        map(data => {
          return data['results'];
        })
      );
  }

  getPopulares() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc')
      .pipe(
        map(data => {
          return data['results'];
        })
      );
  }

  getPopularesTom() {
    return this.getQuery('/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc')
      .pipe(
        map(data => {
          return data['results'];
        })
      );
  }

  getPelicula(termino: string) {

    return this.getQuery(`/search/movie?query=${termino}`)
      .pipe(
        map(data => {
          return data['results'];
        })
      );
  }

  getUnaPelicula(id: string) {

    return this.getQuery(`/movie/${id}?`);
  }
}

