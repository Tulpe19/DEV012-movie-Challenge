import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from, mergeMap} from 'rxjs';
import { ResponseApi } from '../interface';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //Se crean propiedades de la clase
  API_KEY = "201a3e8d880eaba1b37980e691e66578";
  ENDPOINT_BASE = "https://api.themoviedb.org/3";

  public results$: Observable<ResponseApi>
  public pageConfig$: BehaviorSubject<PageEvent>

  constructor(private httpClient: HttpClient) {
    this.pageConfig$ = new BehaviorSubject<PageEvent>({
      pageIndex: 0, pageSize: 20,
      length: 0
    })
    this.results$ = from(this.pageConfig$).pipe(mergeMap(pageEvent => this.getMovies(pageEvent.pageIndex + 1)))
  }

  public getMovies(page: number): Observable<ResponseApi> {
    console.log('getMovies', { page })
    const urlMovieGallery = this.httpClient.get<ResponseApi>(`${this.ENDPOINT_BASE}/discover/movie?api_key=${this.API_KEY}&page=${page}`)
    return urlMovieGallery
  }

  public setPageConfig(newPageConfig: PageEvent) {
    console.log('setPageConfig', { newPageConfig })
    this.pageConfig$.next(newPageConfig)
  }
}