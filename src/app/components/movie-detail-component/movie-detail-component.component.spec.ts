import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponentComponent } from './movie-detail-component.component';

import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('MovieDetailComponentComponent', () => {
  let component: MovieDetailComponentComponent;
  let fixture: ComponentFixture<MovieDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailComponentComponent ],
      providers: [
        HttpClient,HttpHandler,
        { 
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({})
          }
        }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
