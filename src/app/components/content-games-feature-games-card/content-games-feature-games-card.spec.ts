import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGamesFeatureGamesCard } from './content-games-feature-games-card';

describe('ContentGamesFeatureGamesCard', () => {
  let component: ContentGamesFeatureGamesCard;
  let fixture: ComponentFixture<ContentGamesFeatureGamesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGamesFeatureGamesCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGamesFeatureGamesCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
