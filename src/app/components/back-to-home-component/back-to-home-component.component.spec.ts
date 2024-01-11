import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToHomeComponentComponent } from './back-to-home-component.component';

describe('BackToHomeComponentComponent', () => {
  let component: BackToHomeComponentComponent;
  let fixture: ComponentFixture<BackToHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToHomeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
