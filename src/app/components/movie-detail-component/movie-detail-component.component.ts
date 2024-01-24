import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieDetails } from 'src/app/interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-detail-component',
  templateUrl: './movie-detail-component.component.html',
  styleUrls: ['./movie-detail-component.component.scss']
})
export class MovieDetailComponentComponent implements OnInit {
  movieDetail$: Observable<MovieDetails>;


  constructor( 
    private route: ActivatedRoute,
    
    private service: MovieService) { 
      this.movieDetail$ = this.route.paramMap.pipe(
        switchMap((params: ParamMap) =>
          this.service.getMovieDetails(Number (params.get('movieId')!)))
      );
    }

  ngOnInit(): void {
    
  }

}
