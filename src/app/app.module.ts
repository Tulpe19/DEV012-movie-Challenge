import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { QueryBuilderComponentComponent } from './components/query-builder-component/query-builder-component.component';
import { MovieGalleryComponentComponent } from './components/movie-gallery-component/movie-gallery-component.component';
import { PaginatorComponentComponent } from './components/paginator-component/paginator-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,

    QueryBuilderComponentComponent,
    MovieGalleryComponentComponent,
    PaginatorComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
