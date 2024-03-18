import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponentComponent } from './paginator-component.component';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('PaginatorComponentComponent', () => {
  let component: PaginatorComponentComponent;
  let fixture: ComponentFixture<PaginatorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponentComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
