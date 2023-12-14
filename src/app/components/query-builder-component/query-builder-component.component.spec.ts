import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBuilderComponentComponent } from './query-builder-component.component';

describe('QueryBuilderComponentComponent', () => {
  let component: QueryBuilderComponentComponent;
  let fixture: ComponentFixture<QueryBuilderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryBuilderComponentComponent ]
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
