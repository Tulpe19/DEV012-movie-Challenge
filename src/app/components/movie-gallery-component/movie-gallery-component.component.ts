import { Component, OnInit } from '@angular/core';
import { ResponseApi } from 'src/app/interface';
import { PeliculasMock } from 'src/assets/mock-data';


@Component({
  selector: 'app-movie-gallery-component',
  templateUrl: './movie-gallery-component.component.html',
  styleUrls: ['./movie-gallery-component.component.scss']
})
export class MovieGalleryComponentComponent implements OnInit {

  responseAPI: ResponseApi;

  constructor() { 
    this.responseAPI = PeliculasMock;
  }

  ngOnInit(): void {
  }

}
