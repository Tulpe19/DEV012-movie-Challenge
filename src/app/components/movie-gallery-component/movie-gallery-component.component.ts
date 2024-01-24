import { Component, OnInit } from '@angular/core';
import { ResponseApi } from 'src/app/interface';
import { MovieService } from 'src/app/services/movie.service';


@Component({
  selector: 'app-movie-gallery-component',
  templateUrl: './movie-gallery-component.component.html',
  styleUrls: ['./movie-gallery-component.component.scss']
})
export class MovieGalleryComponentComponent implements OnInit {

  responseAPI: ResponseApi = {
    page: 0,
    total_pages: 0,
    total_results: 0,
    results: []
  };

  constructor(public movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.results$.subscribe((moviePage) => {
      console.log({ moviePage });
      this.responseAPI = moviePage;
    });
  }
}
