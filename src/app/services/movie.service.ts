import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseApi } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDFhM2U4ZDg4MGVhYmExYjM3OTgwZTY5MWU2NjU3OCIsInN1YiI6IjY1Nzg3YmQ2ODlkOTdmMDBlMzc1OTM3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.By9BSHjUwo1V8u14rY-s76sizKT4KpIzrqTT4BabX5U";
  ENDPOINT_BASE = "https://api.themoviedb.org/3";
  URL_GENRE_MOVIES = "";
  constructor(private httpClient: HttpClient) { }

  public getData(){
    const urlMovieGallery = this.httpClient.get(`${this.API_KEY} `)

  }

}
