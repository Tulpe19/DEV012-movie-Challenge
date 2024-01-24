import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, from, map, mergeMap, skipUntil, switchMap, tap} from 'rxjs';
import { Genre, MovieDetails, MovieRequestConfig, ResponseApi } from '../interface';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_KEY = "201a3e8d880eaba1b37980e691e66578";
  ENDPOINT_BASE = "https://api.themoviedb.org/3";

  private imageBaseURL: string | undefined;
  private posterSizes: string[] = [];

  private pageConfig$ = new BehaviorSubject<PageEvent>({
    pageIndex: 0, pageSize: 20,
    length: 0
  });
  private genreFilter$: BehaviorSubject<string> = new BehaviorSubject<string> ('');
  private sortFilter$: BehaviorSubject<string> = new BehaviorSubject<string> ('');
  private fullRequestConfig$: Observable<MovieRequestConfig>;

  public results$: Observable<ResponseApi>;

  constructor(private httpClient: HttpClient) {
    this.fullRequestConfig$ = combineLatest({
      pageConfig: this.pageConfig$,
      sorting: this.sortFilter$,
      genre: this.genreFilter$
    });

    
    this.results$ = this.fullRequestConfig$.pipe(
      switchMap(fullRequestConfig => {
        console.log('New request config', fullRequestConfig)
        const page = fullRequestConfig.pageConfig.pageIndex + 1;
        const genreId = fullRequestConfig.genre;
        const sortBy = fullRequestConfig.sorting;
        return this.getMoviesWithFilterAndSort(page, genreId, sortBy);
      }),
      skipUntil(this.getImageConfig()),
      tap(movies => {
        movies.results.forEach(individualMovieResult => {
          const baseURL = this.imageBaseURL
          const imageSize = this.posterSizes[this.posterSizes.length - 2]
          const posterPath = individualMovieResult.poster_path
          if(posterPath) {
            const imgURL = `${baseURL}${imageSize}${posterPath}`
            individualMovieResult.imgURL = imgURL
          }
      })
    }))
  }

  private getImageConfig() {
    let params = new HttpParams()
      .set('api_key', this.API_KEY)
    return this.httpClient.get<any>(`${this.ENDPOINT_BASE}/configuration`, { params }).pipe(tap(response => {
      this.imageBaseURL = response.images.base_url
      this.posterSizes = response.images.poster_sizes
    }));
  }
  
  public getMovies(page: number): Observable<ResponseApi> {
    console.log('getMovies', { page });
    const urlMovieGallery = this.httpClient.get<ResponseApi>(`${this.ENDPOINT_BASE}/discover/movie?api_key=${this.API_KEY}&page=${page}`);
    return urlMovieGallery;
  }
  
  public setPageConfig(newPageConfig: PageEvent) {
    console.log('setPageConfig', { newPageConfig });
    this.pageConfig$.next(newPageConfig)
  }

  public setGenreFilter(genreId: string) {
    console.log('setGenreFilter', { genreId });
    this.genreFilter$.next(genreId);
  }

  public setSortFilter(sortBy: string) {
    console.log('setSortFilter', { sortBy });
    this.sortFilter$.next(sortBy);
  }


  public getMoviesWithFilterAndSort(page: number, genreId: string, sortBy: string): Observable<ResponseApi> {
    console.log('movie request', { page, genreId, sortBy });
    const url = `${this.ENDPOINT_BASE}/discover/movie`;
    let params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('page', page.toString())
    if(genreId !== '') params = params.set('with_genres', genreId);
    if(sortBy !== '') params = params.set('sort_by', sortBy);
    return this.httpClient.get<ResponseApi>(url, { params });
  }
  
  public getGenre(): Observable<Genre[]> {
    const url = `${this.ENDPOINT_BASE}/genre/movie/list`;
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
    return this.httpClient.get<{ genres: Genre[] }>(url, { params }).pipe(map(newGenreList => newGenreList.genres));
  }

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    const url = `${this.ENDPOINT_BASE}/movie/${movieId}`;
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
    return this.httpClient.get<MovieDetails>(url, { params })
  }

}



