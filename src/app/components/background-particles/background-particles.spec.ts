import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundParticles } from './background-particles';

describe('BackgroundParticles', () => {
  let component: BackgroundParticles;
  let fixture: ComponentFixture<BackgroundParticles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroundParticles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundParticles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
