import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCollaborators } from './about-us-collaborators';

describe('AboutUsCollaborators', () => {
  let component: AboutUsCollaborators;
  let fixture: ComponentFixture<AboutUsCollaborators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsCollaborators]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsCollaborators);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
