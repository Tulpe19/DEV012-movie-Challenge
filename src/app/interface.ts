import { PageEvent } from "@angular/material/paginator";

export interface Movies {
  adult: boolean,
  backdrop_path: string, 
  genre_ids: number [],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  imgURL?: string
}

export interface ResponseApi {
  page: number;
  results: Movies [],
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number,
  name: string
}

export interface Sorting {
  id: string,
  name: string
}

export interface MovieRequestOptions {
  page: number;
}

export interface MovieRequestConfig {
  pageConfig: PageEvent,
  sorting: string,
  genre: string, 
}

export interface MovieDetails {
  backdrop_path: string | null,
  budget: number,
  genres: Genre [],
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string | null,
  release_date: string,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  vote_average: number,
  vote_count: number
}

