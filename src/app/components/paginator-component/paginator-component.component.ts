import { Component, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-paginator-component',
  templateUrl: './paginator-component.component.html',
  styleUrls: ['./paginator-component.component.scss']
})
export class PaginatorComponentComponent implements OnInit {
  
  constructor(
    public movieService: MovieService
  ) { }

  pageConfigChanged(newPageConfig: PageEvent) {
    this.movieService.setPageConfig(newPageConfig)
  }

  ngOnInit(): void {
    
  }

}
