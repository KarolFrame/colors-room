import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPeople } from './about-us-people';

describe('AboutUsPeople', () => {
  let component: AboutUsPeople;
  let fixture: ComponentFixture<AboutUsPeople>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsPeople]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsPeople);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
