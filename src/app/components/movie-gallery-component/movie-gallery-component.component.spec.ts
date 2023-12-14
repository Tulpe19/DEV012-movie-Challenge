import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGalleryComponentComponent } from './movie-gallery-component.component';

describe('MovieGalleryComponentComponent', () => {
  let component: MovieGalleryComponentComponent;
  let fixture: ComponentFixture<MovieGalleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieGalleryComponentComponent ]
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
