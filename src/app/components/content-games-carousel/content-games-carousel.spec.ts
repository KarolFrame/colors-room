import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGamesCarousel } from './content-games-carousel';

describe('ContentGamesCarousel', () => {
  let component: ContentGamesCarousel;
  let fixture: ComponentFixture<ContentGamesCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGamesCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGamesCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
