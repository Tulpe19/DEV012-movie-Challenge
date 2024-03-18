import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGalleryComponentComponent } from './movie-gallery-component.component';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MovieGalleryComponentComponent', () => {
  let component: MovieGalleryComponentComponent;
  let fixture: ComponentFixture<MovieGalleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGalleryComponentComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
