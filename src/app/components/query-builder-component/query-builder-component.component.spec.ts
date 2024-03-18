import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBuilderComponentComponent } from './query-builder-component.component';

import { HttpClient, HttpHandler } from '@angular/common/http';


describe('QueryBuilderComponentComponent', () => {
  let component: QueryBuilderComponentComponent;
  let fixture: ComponentFixture<QueryBuilderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryBuilderComponentComponent ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryBuilderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
