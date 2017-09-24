import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenreFilterComponent } from './movie-genre-filter.component';

describe('MovieGenreFilterComponent', () => {
  let component: MovieGenreFilterComponent;
  let fixture: ComponentFixture<MovieGenreFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGenreFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
