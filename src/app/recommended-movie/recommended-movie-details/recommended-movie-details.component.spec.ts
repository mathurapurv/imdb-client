import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedMovieDetailsComponent } from './recommended-movie-details.component';

describe('RecommendedMovieDetailsComponent', () => {
  let component: RecommendedMovieDetailsComponent;
  let fixture: ComponentFixture<RecommendedMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
