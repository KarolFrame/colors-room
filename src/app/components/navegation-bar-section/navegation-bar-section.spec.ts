import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationBarSection } from './navegation-bar-section';

describe('NavegationBarSection', () => {
  let component: NavegationBarSection;
  let fixture: ComponentFixture<NavegationBarSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegationBarSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegationBarSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
