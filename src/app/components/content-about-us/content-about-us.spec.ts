import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAboutUs } from './content-about-us';

describe('ContentAboutUs', () => {
  let component: ContentAboutUs;
  let fixture: ComponentFixture<ContentAboutUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAboutUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAboutUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
