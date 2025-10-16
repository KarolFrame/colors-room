import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGames } from './content-games';

describe('ContentGames', () => {
  let component: ContentGames;
  let fixture: ComponentFixture<ContentGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
