import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsExternals } from './about-us-externals';

describe('AboutUsExternals', () => {
  let component: AboutUsExternals;
  let fixture: ComponentFixture<AboutUsExternals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsExternals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsExternals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
