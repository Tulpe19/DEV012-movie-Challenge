import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Genre, Sorting } from 'src/app/interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-query-builder-component',
  templateUrl: './query-builder-component.component.html',
  styleUrls: ['./query-builder-component.component.scss']
})
export class QueryBuilderComponentComponent implements OnInit {

  selectedGenre = "";
  selectedSort: string = '';
  genreList: Genre[] = []
  sortingList: Sorting[] = [
    {
      id: 'popularity.asc',
      name: 'Popularity Asc'
    },
    {
      id: 'popularity.desc',
      name: 'Popularity Desc'
    },
    {
      id: 'primary_release_date.asc',
      name: 'Release Date Asc'
    },
    {
      id: 'primary_release_date.desc',
      name: 'Release Date Desc'
    }
  ]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getGenre().subscribe(newGenresList => {
      this.genreList = newGenresList
      console.log({ newGenresList })
    })
  }

  onSortChange(newSort: MatSelectChange) {
    this.movieService.setSortFilter(newSort.value)
  }

  onGenreChange(newGenre: MatSelectChange) {
    console.log(newGenre)
    this.movieService.setGenreFilter(newGenre.value)
  }

}
