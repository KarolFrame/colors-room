import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGamesFeatureGames } from './content-games-feature-games';

describe('ContentGamesFeatureGames', () => {
  let component: ContentGamesFeatureGames;
  let fixture: ComponentFixture<ContentGamesFeatureGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGamesFeatureGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGamesFeatureGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
